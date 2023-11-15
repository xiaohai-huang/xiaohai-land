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

    public void SetFlex(VisualElement element, string property, string value)
    {
        switch (property)
        {
            case "flex-wrap":
                element.style.flexWrap = value == "wrap" ? Wrap.Wrap :
                                         value == "nowrap" ? Wrap.NoWrap :
                                         Wrap.NoWrap;
                return;
            case "flex-direction":
                element.style.flexDirection = value == "row" ? FlexDirection.Row :
                                              value == "column" ? FlexDirection.Column :
                                              FlexDirection.Row;
                return;
        }
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

    public void SetMargin(VisualElement element, string direction, float value)
    {
        switch (direction)
        {
            case "top":
                element.style.marginTop = value;
                break;
            case "right":
                element.style.marginRight = value;
                break;
            case "bottom":
                element.style.marginBottom = value;
                break;
            case "left":
                element.style.marginLeft = value;
                break;
            case "all":
                element.style.marginTop = value;
                element.style.marginRight = value;
                element.style.marginBottom = value;
                element.style.marginLeft = value;
                break;
            default:
                Debug.LogWarning("Invalid property name for SetMargin. Use 'top', 'right', 'bottom', or 'left'.");
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

    public void SetTextSelectable(TextField element, bool selectable)
    {
        element.selectAllOnFocus = false;
        element.selectAllOnMouseUp = false;
        element.doubleClickSelectsWord = false;
        element.tripleClickSelectsLine = false;
        element.SelectNone();
        // element.textSelection.isSelectable = selectable;
    }
}