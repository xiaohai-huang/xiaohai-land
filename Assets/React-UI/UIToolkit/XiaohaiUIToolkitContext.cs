using ReactUnity.UIToolkit;

namespace XiaohaiLand.UI.UIToolkit
{
    public class XiaohaiUIToolkitContext : UIToolkitContext
    {
        public XiaohaiUIToolkitContext(Options options) : base(options)
        {
            ComponentCreators["my-image"] = (tag, text, context) => { return new MyImage(context, tag); };
        }
    }
}