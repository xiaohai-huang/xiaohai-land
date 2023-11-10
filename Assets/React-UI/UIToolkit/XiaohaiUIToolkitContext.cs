using ReactUnity.UIToolkit;
using ReactUnity.UIToolkit.StateHandlers;
using UnityEngine.Scripting;

namespace XiaohaiLand.UI.UIToolkit
{
    public class XiaohaiUIToolkitContext : UIToolkitContext
    {
        public XiaohaiUIToolkitContext(Options options) : base(options)
        {
            ComponentCreators["my-image"] = (tag, text, context) => { return new MyImage(context, tag); };
            StateHandlers["active"] = typeof(ActiveStateHandler);
        }

        [Preserve]
        void Keep()
        {
            new HoverStateHandler();
        }
    }
}