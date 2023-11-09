import type { FPSCounter, XiaohaiLand } from "src/unity-types/types";
import type { ReactUnity } from "@reactunity/renderer";

export type MyGlobalsType = {
  FPSCounter: FPSCounter;
};

export declare global {
  var MyGlobals: MyGlobalsType;
  var Renderer: XiaohaiLand.UI.UIToolkit.XiaohaiRendererUIToolkit;
}

export {};
