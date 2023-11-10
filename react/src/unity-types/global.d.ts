import type {
  FPSCounter,
  StyleHelper,
  XiaohaiLand,
} from "src/unity-types/types";
import type { ReactUnity, UnityEngine } from "@reactunity/renderer";

export type MyGlobalsType = {
  FPSCounter: FPSCounter;
  Renderer: XiaohaiLand.UI.UIToolkit.XiaohaiRendererUIToolkit;
};

export declare global {
  var MyGlobals: MyGlobalsType;
  var Renderer: XiaohaiLand.UI.UIToolkit.XiaohaiRendererUIToolkit;
  var StyleHelper: StyleHelper;
  var Q: StyleHelper["Q"];
}

export {};
