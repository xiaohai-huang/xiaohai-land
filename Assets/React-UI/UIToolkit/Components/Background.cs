using UnityEngine.UIElements;
using ReactUnity.Styling;
using ReactUnity.UIToolkit;
using ReactUnity.Helpers.TypescriptUtils;

namespace XiaohaiLand.UI.UIToolkit
{
    [TypescriptExclude]
    public class Background : UIToolkitComponent<VisualElement>
    {
        public Background(UIToolkitContext context, string tag, bool isContainer = true) : base(context, tag, isContainer)
        { }

        protected override void ApplyStylesSelf()
        {
            base.ApplyStylesSelf();
            NodeStyle computedStyle = ComputedStyle;
            if (computedStyle.HasValue(StyleProperties.backgroundImage) && computedStyle.HasValue(StyleProperties.color))
            {
                TargetElement.style.unityBackgroundImageTintColor = computedStyle.color;
            }
            else
            {
                TargetElement.style.unityBackgroundImageTintColor = StyleKeyword.Null;
            }
        }
    }
}