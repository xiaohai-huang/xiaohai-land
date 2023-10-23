using System;

namespace AppUpdate
{
    public class AppUpdateInfo
    {
        /// <summary>
        /// If an update is available, it returns the version of the update.
        /// </summary>
        public string AvailableVersion
        {
            get;
            set;
        }

        /// <summary>
        /// Returns the number of bytes downloaded so far.
        /// The return value is defined only if <see cref="InstallStatus"/> 
        /// returns <see cref="InstallStatus.DOWNLOADING"/>
        /// </summary>
        public ulong BytesDownloaded
        {
            get
            {
                return _bytesDownloadedGetter.Invoke();
            }
        }

        /// <summary>
        /// Returns the total number of bytes to be downloaded for this update.
        /// The return value is defined only if <see cref="InstallStatus"/> 
        /// returns <see cref="InstallStatus.DOWNLOADING"/>
        /// </summary>
        public ulong TotalBytesToDownload
        {
            get;
            set;
        }

        private InstallStatus _installStatus;
        public InstallStatus InstallStatus
        {
            get => _installStatus;
            set
            {
                _installStatus = value;
                OnInstallStatusChanged?.Invoke(value);
            }
        }

        public UpdateAvailability UpdateAvailability
        {
            get;
            set;
        } = UpdateAvailability.UNKNOWN;

        private Func<ulong> _bytesDownloadedGetter;
        public void SetBytesDownloadedGetter(Func<ulong> getter)
        {
            _bytesDownloadedGetter = getter;
        }
        public event Action<InstallStatus> OnInstallStatusChanged;
    }

    public enum InstallStatus
    {
        DOWNLOADING = 0,
        DOWNLOADED,
        FAILED,
        INSTALLED,
        INSTALLING,
        PENDING
    }

    public enum UpdateAvailability
    {
        UNKNOWN = 0,
        UPDATE_AVAILABLE,
        UPDATE_NOT_AVAILABLE
    }
}