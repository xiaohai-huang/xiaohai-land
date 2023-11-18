using ReactUnity.UIToolkit;
using ReactUnity.UIToolkit.StateHandlers;
using ReactUnity.Helpers.TypescriptUtils;
using UnityEngine.Scripting;

namespace XiaohaiLand.UI.UIToolkit
{
    [TypescriptExclude]
    public class XiaohaiUIToolkitContext : UIToolkitContext
    {
        public XiaohaiUIToolkitContext(Options options) : base(options)
        {
            ComponentCreators["my-image"] = (tag, text, context) => new MyImage(context, tag);
            ComponentCreators["background"] = (tag, text, context) => new Background(context, tag);
        }

        [Preserve]
        void Keep()
        {
            new HoverStateHandler();
        }
    }
}