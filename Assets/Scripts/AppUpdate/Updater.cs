using UnityEngine;
using AppUpdate;
using UnityEngine.Events;

public class Updater : MonoBehaviour
{
    public UnityEvent<AppUpdateInfo> OnDownloadStarted;
    public string UpdateServer;
    async void Start()
    {
        IAppUpdateManager appUpdateManager = AppUpdateManagerFactory.Create(UpdateServer);

        var appUpdateInfo = await appUpdateManager.GetAppUpdateInfo();
        if (appUpdateInfo.UpdateAvailability == UpdateAvailability.UPDATE_AVAILABLE)
        {
            Debug.Log($"A new update is available. The new version is: {appUpdateInfo.AvailableVersion}");
            var listener = appUpdateManager.AddListener((status) =>
            {
                if (status == InstallStatus.DOWNLOADING)
                {
                    // show progress bar
                    OnDownloadStarted?.Invoke(appUpdateInfo);
                    Debug.Log($"Downloading an update! bytes: {appUpdateInfo.BytesDownloaded}/{appUpdateInfo.TotalBytesToDownload}");
                }
                else if (status == InstallStatus.DOWNLOADED)
                {
                    Debug.Log("Update has finished downloading");
                }
                else if (status == InstallStatus.INSTALLING)
                {
                    Debug.Log("Installing the update");
                }
            });
            await appUpdateManager.StartUpdateFlow(appUpdateInfo, new AppUpdateOptions());
            appUpdateManager.RemoveListener(listener);
        }
        else if (appUpdateInfo.UpdateAvailability == UpdateAvailability.UPDATE_NOT_AVAILABLE)
        {
            Debug.Log("Update not available.");
        }
        else
        {
            Debug.Log("Cannot find an update.");
        }
    }
}