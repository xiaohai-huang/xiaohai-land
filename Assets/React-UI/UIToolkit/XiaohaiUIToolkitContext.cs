using ReactUnity.UIToolkit;

namespace XiaohaiLand.UI.UIToolkit
{
    public class XiaohaiUIToolkitContext : UIToolkitContext
    {
        public XiaohaiUIToolkitContext(Options options) : base(options)
        {
            ComponentCreators["my-component"] = (tag, text, context) => { return new MyComponent(context, tag); };
        }
    }
}