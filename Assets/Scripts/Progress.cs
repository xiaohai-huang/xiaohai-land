using AppUpdate;
using UnityEngine;
using UnityEngine.UI;

public class Progress : MonoBehaviour
{
    private Image _image;
    private AppUpdateInfo _appUpdateInfo;
    // Start is called before the first frame update
    void Start()
    {
        _image = GetComponent<Image>();
    }

    // Update is called once per frame
    void Update()
    {
        if (_appUpdateInfo != null)
        {
            _image.fillAmount = _appUpdateInfo.BytesDownloaded / _appUpdateInfo.TotalBytesToDownload;
        }
    }

    public void HandleOnStartDownload(AppUpdateInfo appUpdateInfo)
    {
        _appUpdateInfo = appUpdateInfo;
    }
}
