using ReactUnity.UIToolkit;
using UnityEngine;
using UnityEngine.UIElements;

public class HelloWorld : MonoBehaviour
{
    public UIDocument uIDocument;
    public ReactRendererUIToolkit UI;
    // Start is called before the first frame update
    void Start()
    {
        Application.targetFrameRate = (int)Screen.currentResolution.refreshRateRatio.value;
    }

    // Update is called once per frame
    void Update()
    {

    }
    public void BeforeLoadUI()
    {
        Debug.Log("Before load ui");
    }

    public void AfterLoadUI()
    {
        Debug.Log("After load ui");
    }
}
