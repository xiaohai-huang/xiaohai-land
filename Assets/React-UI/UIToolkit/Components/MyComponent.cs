using ReactUnity.UIToolkit;
using UnityEngine;
using UnityEngine.UIElements;

namespace XiaohaiLand.UI.UIToolkit
{
    public class MyComponent : UIToolkitComponent<Image>
    {
        public MyComponent(UIToolkitContext context, string tag) : base(context, tag, true)
        {
            Debug.Log("in MyComponent Constructor");
        }

        public override void SetProperty(string property, object value)
        {
            Debug.Log(value.GetType());
            if (property == "myProps") Debug.Log("myProps = " + value);
            else base.SetProperty(property, value);
        }
    }
}