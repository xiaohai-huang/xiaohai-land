using UnityEngine;
using UnityEngine.UIElements;

[RequireComponent(typeof(UIDocument))]
public class SplashScreen : MonoBehaviour
{

    private UIDocument _dom;
    VisualElement _logo;
    VisualElement _title;

    void Awake()
    {
        _dom = GetComponent<UIDocument>();
        _logo = _dom.rootVisualElement.Q(name: "logo");
        _title = _dom.rootVisualElement.Q(name: "title");
    }
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
    }

    bool done = false;
    void Update()
    {
        if (Time.time > 0.1 && !done)
        {
            done = true;
            _logo.AddToClassList("logo-final");
            _title.AddToClassList("title-final");
        }
    }
}
