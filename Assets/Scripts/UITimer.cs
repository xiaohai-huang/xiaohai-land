using System;
using TMPro;
using UnityEngine;

public class UITimer : MonoBehaviour
{
    public string TextTemplate = "Downloading index.js {0:F2}s.";
    private TextMeshProUGUI _ui;
    private float _time;
    void Awake()
    {
        _ui = GetComponent<TextMeshProUGUI>();
    }
    void OnEnable()
    {
        _time = Time.time;
        InvokeRepeating(nameof(UpdateText), 0, 0.1f);
    }

    void OnDisable()
    {
        CancelInvoke(nameof(UpdateText));
    }

    void UpdateText()
    {
        _ui.text = String.Format(TextTemplate, Time.time - _time);
    }

}
