using UnityEngine;
using ReactUnity.Types;
using ReactUnity.Styling.Converters;
using ReactUnity.UIToolkit;
using ReactUnity.Helpers.TypescriptUtils;


namespace XiaohaiLand.UI.UIToolkit
{
    [TypescriptExclude]
    public class MyImage : ImageComponent
    {
        public MyImage(UIToolkitContext context, string tag) : base(context, tag)
        { }

        public override void SetProperty(string property, object value)
        {
            if (property == "source" || property == "src") SetSource(value);
            else base.SetProperty(property, value);
        }

        private new void SetSource(object value)
        {
            if (!AllConverters.SpriteSourceConverter.TryGetConstantValue<SpriteReference>(value, out var source))
                source = SpriteReference.None;
            source.Get(Context, SetSprite);
        }

        private new void SetSprite(Sprite sprite)
        {
            base.SetSprite(sprite);
            FireEvent("onLoad", new { type = "load" });
        }
    }
}