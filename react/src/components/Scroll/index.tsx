import type {
  UnityEngine,
  ReactUnity,
  ScrollDirection,
} from "@reactunity/renderer";
import type { View } from "@reactunity/renderer/uitoolkit";
import classNames from "classnames";

type ScrollProps = {
  className?: string;
  children?: JSX.Element;
  style?: View<ReactUnity.UIToolkit.ScrollViewComponent>["style"];
  direction?: ScrollDirection;
  showVerticalScroller?: boolean;
  showHorizontalScroller?: boolean;
};

function Scroll({
  className,
  children,
  style,
  direction,
  showHorizontalScroller = false,
  showVerticalScroller = false,
}: ScrollProps) {
  return (
    <scroll
      className={classNames(className, "my-scroll-component")}
      style={
        typeof style === "string"
          ? style
          : { width: "100%", height: "100%", margin: 0, ...style }
      }
      direction={direction}
      onAttachToPanel={(event) => {
        // Hide the scroll bar
        const element =
          event.currentTarget as UnityEngine.UIElements.ScrollView;
        if (!showVerticalScroller) {
          element.verticalScrollerVisibility =
            Interop.UnityEngine.UIElements.ScrollerVisibility.Hidden;
        }
        if (!showHorizontalScroller) {
          element.horizontalScrollerVisibility =
            Interop.UnityEngine.UIElements.ScrollerVisibility.Hidden;
        }
      }}
    >
      {children}
    </scroll>
  );
}

export default Scroll;
