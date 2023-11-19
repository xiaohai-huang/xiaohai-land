using ReactUnity.Styling;
using ReactUnity.Types;
using ReactUnity.UIToolkit;
using UnityEngine;
using UnityEngine.UIElements;

namespace XiaohaiLand.UI.UIToolkit
{
    public class MyView : UIToolkitComponent<VisualElement>
    {
        public MyView(UIToolkitContext context, string tag, bool isContainer = true) : base(context, tag, isContainer)
        {
        }

        protected override void ApplyStylesSelf()
        {
            var computed = ComputedStyle;
            TargetElement.style.backgroundColor = StylingHelpers.GetStyleColor(computed, StyleProperties.backgroundColor);
            TargetElement.style.color = StylingHelpers.GetStyleColor(computed, StyleProperties.color);
#if UNITY_2020_1_OR_NEWER
            TargetElement.style.textOverflow = StylingHelpers.GetStyleEnumCustom<TextOverflow>(computed, StyleProperties.textOverflow);
#endif
            TargetElement.style.visibility = StylingHelpers.GetStyleBoolToEnum(computed, StyleProperties.visibility, Visibility.Visible, Visibility.Hidden);
            TargetElement.style.opacity = StylingHelpers.GetStyleFloat(computed, StyleProperties.opacity);
            TargetElement.style.whiteSpace = StylingHelpers.GetStyleBoolToEnum(computed, StyleProperties.textWrap, WhiteSpace.Normal, WhiteSpace.NoWrap);

            if (computed.HasValue(StyleProperties.fontSize)) TargetElement.style.fontSize = computed.fontSize;
            else TargetElement.style.fontSize = StyleKeyword.Null;

            TargetElement.style.borderBottomLeftRadius = StylingHelpers.GetStyleBorderRadius(computed, StyleProperties.borderBottomLeftRadius);
            TargetElement.style.borderBottomRightRadius = StylingHelpers.GetStyleBorderRadius(computed, StyleProperties.borderBottomRightRadius);
            TargetElement.style.borderTopLeftRadius = StylingHelpers.GetStyleBorderRadius(computed, StyleProperties.borderTopLeftRadius);
            TargetElement.style.borderTopRightRadius = StylingHelpers.GetStyleBorderRadius(computed, StyleProperties.borderTopRightRadius);

            TargetElement.style.borderBottomColor = StylingHelpers.GetStyleBorderColor(computed, StyleProperties.borderBottomColor);
            TargetElement.style.borderTopColor = StylingHelpers.GetStyleBorderColor(computed, StyleProperties.borderTopColor);
            TargetElement.style.borderLeftColor = StylingHelpers.GetStyleBorderColor(computed, StyleProperties.borderLeftColor);
            TargetElement.style.borderRightColor = StylingHelpers.GetStyleBorderColor(computed, StyleProperties.borderRightColor);

#if UNITY_2022_3_OR_NEWER
            TargetElement.style.backgroundPositionX = StylingHelpers.GetStyleBackgroundPosition(computed, StyleProperties.backgroundPositionX);
            TargetElement.style.backgroundPositionY = StylingHelpers.GetStyleBackgroundPosition(computed, StyleProperties.backgroundPositionY);
            TargetElement.style.backgroundSize = StylingHelpers.GetStyleBackgroundSize(computed, StyleProperties.backgroundSize);
            TargetElement.style.backgroundRepeat = StylingHelpers.GetStyleBackgroundRepeat(computed, StyleProperties.backgroundRepeatX, StyleProperties.backgroundRepeatY);

            TargetElement.style.letterSpacing = StylingHelpers.GetStyleFloat(computed, StyleProperties.letterSpacing).value;
            TargetElement.style.wordSpacing = StylingHelpers.GetStyleFloat(computed, StyleProperties.wordSpacing).value;
#endif

            if (computed.HasValue(StyleProperties.backgroundImage))
            {
                var bg = computed.backgroundImage?.Get(0);
                TargetElement.style.backgroundImage = null;
                if (bg != null)
                {
                    UrlImageDefinition urlImage = (UrlImageDefinition)bg;
                    urlImage.Reference.Get(Context, sp =>
                    {
                        if (bg != ComputedStyle.backgroundImage?.Get(0)) return;

                        if (sp != null)
                            TargetElement.style.backgroundImage = sp.texture;
                    });
                }
            }
            else TargetElement.style.backgroundImage = StyleKeyword.Null;

            if (computed.HasValue(StyleProperties.fontStyle) || computed.HasValue(StyleProperties.fontWeight))
                TargetElement.style.unityFontStyleAndWeight = StylingHelpers.ConvertFontStyle(computed.fontStyle, computed.fontWeight);
            else TargetElement.style.unityFontStyleAndWeight = StyleKeyword.Null;


            if (computed.HasValue(StyleProperties.backgroundImage) && computed.HasValue(StyleProperties.color))
                TargetElement.style.unityBackgroundImageTintColor = computed.color;
            else TargetElement.style.unityBackgroundImageTintColor = StyleKeyword.Null;


            if (computed.HasValue(StyleProperties.textAlign))
            {
                if (StylingHelpers.TextAlignMap.TryGetValue(computed.textAlign, out var value)) TargetElement.style.unityTextAlign = value;
                else TargetElement.style.unityTextAlign = TextAnchor.MiddleCenter;
            }
            else TargetElement.style.unityTextAlign = StyleKeyword.Null;


            if (computed.HasValue(StyleProperties.fontFamily))
            {
                if (computed.fontFamily != null) computed.fontFamily?.Get(Context, x =>
                {
                    if (x?.Font != null) TargetElement.style.unityFont = x?.Font;
#if REACT_TEXTCORE
                    else if (x?.TextCoreFontAsset != null) TargetElement.style.unityFontDefinition = FontDefinition.FromSDFFont(x?.TextCoreFontAsset);
#endif
#if REACT_TMP
                    else if (x?.TmpFontAsset != null) TargetElement.style.unityFont = x?.TmpFontAsset?.sourceFontFile;
#endif
                    else TargetElement.style.unityFont = ResourcesHelper.DefaultFont;
                });
            }
            else TargetElement.style.unityFont = StyleKeyword.Null;

            // Transforms

            if (computed.HasValue(StyleProperties.scale)) TargetElement.style.scale = new Scale(computed.scale);
            else TargetElement.style.scale = Scale.None();

            if (computed.HasValue(StyleProperties.rotate)) TargetElement.style.rotate = new Rotate(computed.rotate.z);
            else TargetElement.style.rotate = Rotate.None();

            if (computed.HasValue(StyleProperties.translate))
            {
                var tran = computed.translate;
                Length x = StylingHelpers.YogaValueToStyleLength(tran.X).value;
                Length y = StylingHelpers.YogaValueToStyleLength(tran.Y).value;
                TargetElement.style.translate = new Translate(x, y);
            }
            else TargetElement.style.translate = Translate.None();

            if (computed.HasValue(StyleProperties.transformOrigin))
            {
                var origin = computed.transformOrigin;
                Length x = StylingHelpers.YogaValueToStyleLength(origin.X).value;
                Length y = StylingHelpers.YogaValueToStyleLength(origin.Y).value;
                TargetElement.style.transformOrigin = new TransformOrigin(x, y);
            }
            else TargetElement.style.transformOrigin = TransformOrigin.Initial();
        }

    }
}