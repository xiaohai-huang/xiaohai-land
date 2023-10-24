using TMPro;
using UnityEngine;

public class IncrementButton : MonoBehaviour
{
    private int count = 0;
    private TextMeshProUGUI _text;

    void Awake()
    {
        _text = GetComponentInChildren<TextMeshProUGUI>();
    }

    void Increment()
    {
        count++;
        _text.text = count.ToString();
    }

    public void HandleOnClick()
    {
        Increment();
    }
}
