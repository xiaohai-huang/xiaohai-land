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
        { }

        [Preserve]
        void Keep()
        {
            new HoverStateHandler();
        }
    }
}