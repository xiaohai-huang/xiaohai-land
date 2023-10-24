using TMPro;
using UnityEngine;

public class TimeUI : MonoBehaviour
{
    private TextMeshProUGUI _text;

    void Awake()
    {
        _text = GetComponentInChildren<TextMeshProUGUI>();
    }

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        _text.text = $"Time: {Time.time:F2}";
    }
}
