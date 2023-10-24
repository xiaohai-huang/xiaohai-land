using System;
using System.IO;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Networking;
using System.Security.Cryptography;
using DiffTool;

namespace AppUpdate
{
    class AndroidAppUpdateManager : IAppUpdateManager
    {
        private readonly string _server;
        private string GET_CURRENT_VERSION_ENDPOINT => $"{_server}/current-version";
        private string GET_PATCH_INFO_ENDPOINT => $"{_server}/get-patch?version={Application.version}";
        private readonly string WORKING_DIR = Path.Combine(Application.persistentDataPath, "AppUpdateData");
        private AppUpdateInfo _appUpdateInfo;
        public AndroidAppUpdateManager(string server)
        {
            _server = server;
            if (!Directory.Exists(WORKING_DIR))
            {
                Directory.CreateDirectory(WORKING_DIR);
            }
        }

        public async Task<AppUpdateInfo> GetAppUpdateInfo()
        {
            AppUpdateInfo info = new();
            _appUpdateInfo = info;

            try
            {
                info.AvailableVersion = await GetCurrentVersion();
            }
            catch (Exception e)
            {
                Debug.LogException(e);
                info.UpdateAvailability = UpdateAvailability.UNKNOWN;
                return info;
            }


            if (Application.version == info.AvailableVersion)
            {
                info.UpdateAvailability = UpdateAvailability.UPDATE_NOT_AVAILABLE;
            }
            else
            {
                info.UpdateAvailability = UpdateAvailability.UPDATE_AVAILABLE;
                info.InstallStatus = InstallStatus.PENDING;
            }
            return info;
        }
        public Action<InstallStatus> AddListener(Action<InstallStatus> listener)
        {
            _appUpdateInfo.OnInstallStatusChanged += listener;
            return listener;
        }

        public void RemoveListener(Action<InstallStatus> listener)
        {
            _appUpdateInfo.OnInstallStatusChanged -= listener;
        }

        public async Task StartUpdateFlow(AppUpdateInfo updateInfo, AppUpdateOptions options)
        {
            // Start downloading the update
            var (patchFilePath, hash) = await DownloadPatch(updateInfo);

            // Finish downloading the update
            updateInfo.InstallStatus = InstallStatus.DOWNLOADED;

            // Merge the patch with the apk on device to create the updated apk
            Debug.Log("Start to apply patch");
            string apkPath = Path.Combine(WORKING_DIR, "merged.apk");
            string oldApkPath = Application.dataPath;
            bool patchCreated = await DiffToolFactory.Create(Tool.YZQBSDiff).ApplyPatch(oldApkPath, patchFilePath, apkPath);
            if (!patchCreated)
            {
                Debug.LogError("Failed to create the merged apk");
                updateInfo.InstallStatus = InstallStatus.FAILED;
                return;
            }
            bool matched = hash == ComputeSha256Hash(apkPath);
            if (!matched)
            {
                updateInfo.InstallStatus = InstallStatus.FAILED;
                Debug.LogError("hash does not match!");
                Debug.LogError($"hash: {hash}");
                Debug.LogError($"computed hash: {ComputeSha256Hash(apkPath)}");
            }
            else
            {
                Debug.Log("hash matched: " + hash);
                // Install the update
                updateInfo.InstallStatus = InstallStatus.INSTALLING;
                bool success = InstallApp(apkPath);
                updateInfo.InstallStatus = success ? InstallStatus.INSTALLED : InstallStatus.FAILED;
            }
        }

        private async Task<(string, string)> DownloadPatch(AppUpdateInfo appUpdateInfo)
        {
            var patchInfo = await GetPatchInfo();
            appUpdateInfo.TotalBytesToDownload = await GetTotalBytesToDownload(patchInfo.patch.url);

            return (await DownloadFile(patchInfo.patch.url, WORKING_DIR,
                    $"{patchInfo.from}-{patchInfo.to}.patch", (request) =>
                    {
                        appUpdateInfo.SetBytesDownloadedGetter(() => request.downloadedBytes);
                        appUpdateInfo.InstallStatus = InstallStatus.DOWNLOADING;
                    }), patchInfo.hash);
        }

        private bool InstallApp(string apkPath)
        {
            bool success = true;
            Debug.Log("Installing App");

            try
            {
                //Get Activity then Context
                AndroidJavaClass unityPlayer = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
                AndroidJavaObject currentActivity = unityPlayer.GetStatic<AndroidJavaObject>("currentActivity");
                AndroidJavaObject unityContext = currentActivity.Call<AndroidJavaObject>("getApplicationContext");

                //Get the package Name
                string packageName = unityContext.Call<string>("getPackageName");
                string authority = packageName + ".fileprovider";
                Debug.Log($"authority:{authority} ");


                AndroidJavaObject fileObj = new AndroidJavaObject("java.io.File", apkPath);
                //FileProvider object that will be used to call it static function
                AndroidJavaClass fileProvider = new AndroidJavaClass("androidx.core.content.FileProvider");

                //getUriForFile(Context context, String authority, File file)
                AndroidJavaObject uri = fileProvider.CallStatic<AndroidJavaObject>("getUriForFile", unityContext, authority, fileObj);
                string str = uri.Call<string>("toString");
                Debug.Log($"apk's content uri: {str}");

                AndroidJavaClass IntentClass = new AndroidJavaClass("android.content.Intent");
                string ACTION_VIEW = IntentClass.GetStatic<string>("ACTION_VIEW");
                AndroidJavaObject intent = new AndroidJavaObject("android.content.Intent", ACTION_VIEW);

                int FLAG_ACTIVITY_NEW_TASK = IntentClass.GetStatic<int>("FLAG_ACTIVITY_NEW_TASK");
                int FLAG_GRANT_READ_URI_PERMISSION = IntentClass.GetStatic<int>("FLAG_GRANT_READ_URI_PERMISSION");
                intent.Call<AndroidJavaObject>("setDataAndType", uri, "application/vnd.android.package-archive");
                intent.Call<AndroidJavaObject>("addFlags", FLAG_ACTIVITY_NEW_TASK);
                intent.Call<AndroidJavaObject>("addFlags", FLAG_GRANT_READ_URI_PERMISSION);
                currentActivity.Call("startActivity", intent);

                Debug.Log("Success");
            }
            catch (Exception e)
            {
                Debug.Log("Error: " + e.Message);
                Debug.Log(e.Source);
                success = false;
            }

            return success;
        }


        private async Task<string> GetCurrentVersion()
        {
            VersionInfo versionInfo = await Fetch<VersionInfo>(GET_CURRENT_VERSION_ENDPOINT);
            return versionInfo.version;
        }

        private async Task<PatchInfo> GetPatchInfo()
        {
            PatchInfo info = await Fetch<PatchInfo>(GET_PATCH_INFO_ENDPOINT);
            return info;
        }

        private static async Task<T> Fetch<T>(string url)
        {
            using UnityWebRequest request = UnityWebRequest.Get(url);
            await request.SendWebRequest();

            if (request.result == UnityWebRequest.Result.ConnectionError || request.result == UnityWebRequest.Result.ProtocolError)
            {
                throw new Exception(request.error);
            }
            else
            {
                return JsonUtility.FromJson<T>(request.downloadHandler.text);
            }
        }


        private static async Task<string> DownloadFile(string url, string folder, string saveFileName, Action<UnityWebRequest> onRequestStarted = null)
        {
            string savePath = Path.Combine(folder, saveFileName);
            UnityWebRequest www = UnityWebRequest.Get(url);
            onRequestStarted?.Invoke(www);
            await www.SendWebRequest();

            if (www.result != UnityWebRequest.Result.Success)
            {
                Debug.LogError(www.error);
                throw new Exception(www.error);
            }
            else
            {
                // Save the downloaded file
                File.WriteAllBytes(savePath, www.downloadHandler.data);
            }
            return savePath;
        }

        [Serializable]
        struct VersionInfo
        {
            public string version;
        }

        [Serializable]
        struct PatchInfo
        {
            public string from;
            public string to;
            public Patch patch;
            /// <summary>
            /// The final apk should match this hash. SHA256
            /// </summary>
            public string hash;
            public string latestVersion;
        }

        [Serializable]
        struct Patch
        {
            public string url;
        }


        public static async Task<ulong> GetTotalBytesToDownload(string url)
        {
            using UnityWebRequest headRequest = UnityWebRequest.Head(url);
            await headRequest.SendWebRequest();

            if (headRequest.result == UnityWebRequest.Result.ConnectionError || headRequest.result == UnityWebRequest.Result.ProtocolError)
            {
                Debug.LogError(headRequest.error);
                return 0;
            }
            else
            {
                string contentLength = headRequest.GetResponseHeader("Content-Length");
                if (contentLength != null)
                {
                    if (ulong.TryParse(contentLength, out ulong totalBytes))
                    {
                        return totalBytes;
                    }
                    else
                    {
                        Debug.LogError("Failed to parse Content-Length header");
                        return 0;
                    }
                }
                else
                {
                    Debug.LogError("Content-Length header is not present");
                    return 0;
                }
            }
        }

        public string ComputeSha256Hash(string filename)
        {
            using SHA256 sha256 = SHA256.Create();
            using FileStream stream = File.OpenRead(filename);
            byte[] hash = sha256.ComputeHash(stream);
            return BitConverter.ToString(hash).Replace("-", "").ToLowerInvariant();
        }
    }
}
