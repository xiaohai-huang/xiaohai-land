using UnityEngine;
using ReactUnity.Types;
using ReactUnity.UIToolkit;
using System.Collections.Generic;

namespace XiaohaiLand.UI.UIToolkit
{
    public class MyImage : ImageComponent
    {
        private readonly HashSet<string> OBJECT_FIT_CLASSES = new()
        {
            "object-fit-contain",
            "object-fit-cover",
            "object-fit-fill"
        };
        public MyImage(UIToolkitContext context, string tag) : base(context, tag)
        {
        }

        public override void SetProperty(string property, object value)
        {
            Debug.Log($"{property},{value.GetType()}");
            if (property == "myProps") Debug.Log("myProps = " + value);
            else base.SetProperty(property, value);
        }

        protected override void ApplyStylesSelf()
        {
            base.ApplyStylesSelf();

            var computed = ComputedStyle;
            switch (computed.objectFit)
            {
                case ObjectFit.Contain: AddClass("object-fit-contain"); break;
                case ObjectFit.Cover: AddClass("object-fit-cover"); break;
                case ObjectFit.Fill: AddClass("object-fit-fill"); break;
            }
        }

        void AddClass(string className)
        {
            foreach (string name in OBJECT_FIT_CLASSES)
            {
                if (className != name)
                    TargetElement.EnableInClassList(name, false);
            }

            TargetElement.EnableInClassList(className, true);
        }
    }
}