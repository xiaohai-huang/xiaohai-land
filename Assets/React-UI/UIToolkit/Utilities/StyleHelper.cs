using UnityEngine;
using UnityEngine.UIElements;

public class StyleHelper
{
    private static StyleHelper _instance;

    public static StyleHelper Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = new StyleHelper();
            }
            return _instance;
        }
    }

    private StyleHelper() { } // Private constructor to prevent instance creation

    public VisualElement Q(VisualElement element, string name)
    {
        var result = element.Q(name);
        return result;
    }

    public void SetPadding(VisualElement element, string direction, float value)
    {
        switch (direction)
        {
            case "top":
                element.style.paddingTop = value;
                break;
            case "right":
                element.style.paddingRight = value;
                break;
            case "bottom":
                element.style.paddingBottom = value;
                break;
            case "left":
                element.style.paddingLeft = value;
                break;
            case "all":
                element.style.paddingTop = value;
                element.style.paddingRight = value;
                element.style.paddingBottom = value;
                element.style.paddingLeft = value;
                break;
            default:
                Debug.LogWarning("Invalid property name for SetPadding. Use 'top', 'right', 'bottom', or 'left'.");
                break;
        }
    }

    public void SetAlignItems(VisualElement element, string value)
    {
        switch (value.ToLower())
        {
            case "flex-start":
                element.style.alignItems = Align.FlexStart;
                break;
            case "center":
                element.style.alignItems = Align.Center;
                break;
            case "flex-end":
                element.style.alignItems = Align.FlexEnd;
                break;
            case "stretch":
                element.style.alignItems = Align.Stretch;
                break;
            default:
                Debug.LogWarning("Invalid value for SetAlignItems. Use 'flex-start', 'center', 'flex-end', or 'stretch'.");
                break;
        }
    }
}