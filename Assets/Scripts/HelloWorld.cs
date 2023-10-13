using ReactUnity.UGUI;
using UnityEngine;
using UnityEngine.Scripting;

public class HelloWorld : MonoBehaviour
{
    public ReactRendererUGUI UGUI;
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

    [Preserve]
    private void DontStripGetComponentWithString()
    {
        GameObject.Find("").GetComponent("");
    }
}
