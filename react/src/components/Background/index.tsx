import type { RenderStyle } from "@reactunity/renderer";
import type { XiaohaiUIToolkitElements } from "src/unity-types/jsx/jsx-runtime";

type BackgroundProps = XiaohaiUIToolkitElements["background"] & {
  tintColor?: RenderStyle["color"];
};

function Background({ tintColor, style, ...rest }: BackgroundProps) {
  return (
    <view
      style={typeof style === "string" ? style : { ...style, color: tintColor }}
      {...rest}
    />
  );
}

export default Background;
