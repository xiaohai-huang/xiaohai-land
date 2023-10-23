using System;
using System.Threading.Tasks;

namespace AppUpdate
{
    public static class AppUpdateManagerFactory
    {
        public static IAppUpdateManager Create(string server)
        {
#if UNITY_ANDROID            
            return new AndroidAppUpdateManager(server);
#endif

            return new FakeAppUpdateManager();
        }
    }

    class FakeAppUpdateManager : IAppUpdateManager
    {
        public Action<InstallStatus> AddListener(Action<InstallStatus> listener)
        {
            throw new NotImplementedException();
        }

        public Task<AppUpdateInfo> GetAppUpdateInfo()
        {
            var appUpdateInfo = new AppUpdateInfo() { UpdateAvailability = UpdateAvailability.UNKNOWN };
            return Task.FromResult(appUpdateInfo);
        }

        public void RemoveListener(Action<InstallStatus> listener)
        {
            throw new NotImplementedException();
        }

        public Task StartUpdateFlow(AppUpdateInfo updateInfo, AppUpdateOptions options)
        {
            throw new NotImplementedException();
        }
    }
}