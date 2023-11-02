using UnityEngine;
using UnityEngine.UIElements;

namespace XiaohaiLand.UI
{
    public class StyleHelper : MonoBehaviour
    {
        [SerializeField]
        private UIDocument _uiDocument;

        public void SetBackgroundSize(string id, BackgroundSizeType value)
        {
            var element = _uiDocument.rootVisualElement.Q(name: id);
            element.style.backgroundSize = new StyleBackgroundSize(new BackgroundSize(value));
        }
    }
}