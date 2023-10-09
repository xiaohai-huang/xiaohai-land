using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HelloWorld : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("hall");
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
