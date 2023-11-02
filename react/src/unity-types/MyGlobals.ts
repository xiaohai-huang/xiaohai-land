import type { FPSCounter, XiaohaiLand } from "src/unity-types/types";
import type { ReactUnity } from "@reactunity/renderer";

export type MyGlobalsType = typeof Globals & {
  FPSCounter: FPSCounter;
  Renderer: ReactUnity.UIToolkit.ReactRendererUIToolkit;
  StyleHelper: XiaohaiLand.UI.StyleHelper;
};

export default Globals as MyGlobalsType;
