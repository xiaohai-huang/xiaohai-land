using System;
using System.IO;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Networking;
using BsDiff;

public class InAppUpdate : MonoBehaviour
{
    public string UpdateServer;
    public UnityEvent<UnityWebRequest> OnStartDownload;
    private string _patchFilePath;
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log($"Application.dataPath: {Application.dataPath}");
        Debug.Log("Game version: " + Application.version);
    }

    public async void CheckUpdates()
    {
        var endpoint = $"{UpdateServer}/current-version";
        var data = JsonUtility.FromJson<VersionInfo>(await Fetch(endpoint));
        if (Application.version == data.version)
        {
            Debug.Log("The app is already up to date");
        }
        else
        {
            Debug.Log($"Need to update the app. Current version: {Application.version}. Latest version: {data.version}");
        }
    }

    struct VersionInfo
    {
        public string version;
    }

    public async void OnDownloadPatchClick()
    {
        _patchFilePath = await DownloadPatch();
        Debug.Log("Patch File Path: " + _patchFilePath);
    }

    async Task<string> DownloadPatch()
    {
        var endpoint = $"{UpdateServer}/get-patch?version={Application.version}";
        var data = JsonUtility.FromJson<PatchInfo>(await Fetch(endpoint));
        return await DownloadFile(data.patch, "patches", $"{data.from}-{data.to}.patch");
    }

    public void PerformUpdate()
    {
        if (string.IsNullOrEmpty(_patchFilePath))
        {
            Debug.Log("Patch does not exist");
        }
        else
        {
            string apkFilePath = ApplyPatch(Application.dataPath, _patchFilePath, Path.Combine(Application.persistentDataPath, "patches", "merged.apk"));
            InstallApp(apkFilePath);
        }
    }

    async Task<string> DownloadFile(string url, string folder, string saveFileName)
    {
        string savePath = Path.Combine(Application.persistentDataPath, folder);
        savePath = Path.Combine(savePath, saveFileName);
        UnityWebRequest www = UnityWebRequest.Get(url);
        OnStartDownload?.Invoke(www);
        await www.SendWebRequest();

        if (www.result != UnityWebRequest.Result.Success)
        {
            Debug.Log(www.error);
            throw new Exception(www.error);
        }
        else
        {
            if (!Directory.Exists(Path.GetDirectoryName(savePath)))
            {
                Directory.CreateDirectory(Path.GetDirectoryName(savePath));
                Debug.Log("Created Dir: " + Path.GetDirectoryName(savePath));
            }
            // Save the downloaded file
            Debug.Log("Saved Data to: " + savePath);
            File.WriteAllBytes(savePath, www.downloadHandler.data);
        }
        return savePath;
    }

    string ApplyPatch(string oldFilePath, string patchFilePath, string saveFilePath)
    {
        using var oldFile = File.OpenRead(oldFilePath);
        using var newFile = File.Create(saveFilePath);
        BinaryPatch.Apply(oldFile, () => File.OpenRead(patchFilePath), newFile);
        return saveFilePath;
    }

    public bool InstallApp(string apkPath)
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
            AndroidJavaClass intentObj = new AndroidJavaClass("android.content.Intent");
            string ACTION_VIEW = intentObj.GetStatic<string>("ACTION_VIEW");
            AndroidJavaObject intent = new AndroidJavaObject("android.content.Intent", ACTION_VIEW);


            int FLAG_ACTIVITY_NEW_TASK = intentObj.GetStatic<int>("FLAG_ACTIVITY_NEW_TASK");
            int FLAG_GRANT_READ_URI_PERMISSION = intentObj.GetStatic<int>("FLAG_GRANT_READ_URI_PERMISSION");

            //File fileObj = new File(String pathname);
            AndroidJavaObject fileObj = new AndroidJavaObject("java.io.File", apkPath);
            //FileProvider object that will be used to call it static function
            AndroidJavaClass fileProvider = new AndroidJavaClass("androidx.core.content.FileProvider");

            //getUriForFile(Context context, String authority, File file)
            AndroidJavaObject uri = fileProvider.CallStatic<AndroidJavaObject>("getUriForFile", unityContext, authority, fileObj);

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

    struct PatchInfo
    {
        public string from;
        public string to;
        public string patch;
        public string latestVersion;
    }

    public async Task<string> Fetch(string url)
    {
        using UnityWebRequest request = UnityWebRequest.Get(url);
        await request.SendWebRequest();

        if (request.result == UnityWebRequest.Result.ConnectionError || request.result == UnityWebRequest.Result.ProtocolError)
        {
            throw new Exception(request.error);
        }
        else
        {
            return request.downloadHandler.text;
        }
    }
}
