using System;
using System.IO;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Networking;

public class InAppUpdate : MonoBehaviour
{
    public string ApkUrl;
    public UnityEvent<UnityWebRequest> OnStartDownload;

    // Start is called before the first frame update
    async void Start()
    {
        var apkPath = await DownloadApk(ApkUrl);
        if (apkPath != null)
        {
            InstallApp(apkPath);
        }
        else
        {
            Debug.Log("APK download failed.");
        }
    }

    // Update is called once per frame
    void Update()
    {

    }
    async Task<string> DownloadApk(string url)
    {
        string savePath = Path.Combine(Application.persistentDataPath, "apkFolder");
        savePath = Path.Combine(savePath, "myReact.apk");
        UnityWebRequest www = UnityWebRequest.Get(url);
        OnStartDownload?.Invoke(www);
        await www.SendWebRequest();

        if (www.result != UnityWebRequest.Result.Success)
        {
            Debug.Log(www.error);
            return null;
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
}
