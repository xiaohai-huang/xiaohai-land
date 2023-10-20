using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class Progress : MonoBehaviour
{
    private Image _image;
    private UnityWebRequest _request;
    // Start is called before the first frame update
    void Start()
    {
        _image = GetComponent<Image>();
    }

    // Update is called once per frame
    void Update()
    {
        if (_request != null)
        {
            _image.fillAmount = _request.downloadProgress;
        }
    }

    public void HandleOnStartDownload(UnityWebRequest request)
    {
        _request = request;
    }
}
