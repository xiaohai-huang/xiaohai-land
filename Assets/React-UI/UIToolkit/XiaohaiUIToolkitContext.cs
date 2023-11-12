using ReactUnity.UIToolkit;
using ReactUnity.UIToolkit.StateHandlers;
using UnityEngine.Scripting;

namespace XiaohaiLand.UI.UIToolkit
{
    public class XiaohaiUIToolkitContext : UIToolkitContext
    {
        public XiaohaiUIToolkitContext(Options options) : base(options)
        { }

        [Preserve]
        void Keep()
        {
            new HoverStateHandler();
        }
    }
}