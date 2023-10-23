using System;
using System.Threading.Tasks;

namespace AppUpdate
{
    public interface IAppUpdateManager
    {
        /// <summary>
        /// Requests the update availability for the current app.
        /// </summary>
        /// <returns></returns>
        abstract Task<AppUpdateInfo> GetAppUpdateInfo();
        abstract Action<InstallStatus> AddListener(Action<InstallStatus> listener);
        abstract void RemoveListener(Action<InstallStatus> listener);
        abstract Task StartUpdateFlow(AppUpdateInfo updateInfo, AppUpdateOptions options);
    }
}