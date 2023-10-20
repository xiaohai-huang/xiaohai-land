using TMPro;
using UnityEngine;

public class VersionText : MonoBehaviour
{
    private TextMeshProUGUI _textUI;
    // Start is called before the first frame update
    void Awake()
    {
        _textUI = GetComponent<TextMeshProUGUI>();
        _textUI.text = Application.version;
    }
}
