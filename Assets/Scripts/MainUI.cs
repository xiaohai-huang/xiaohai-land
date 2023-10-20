using UnityEngine;

public class MainUI : MonoBehaviour
{
    private Canvas _canvas;
    void Awake()
    {
        _canvas = GetComponentInChildren<Canvas>();
    }

    public void ShowSplashScreen()
    {
        _canvas.gameObject.SetActive(true);
    }

    public void HideSplashScreen()
    {
        Invoke(nameof(HideSplashScreenInternal), 2f);
    }

    void HideSplashScreenInternal()
    {
        _canvas.gameObject.SetActive(false);
    }
}
