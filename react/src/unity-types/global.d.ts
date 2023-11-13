import type {
  FPSCounter,
  StyleHelper,
  XiaohaiLand,
} from "src/unity-types/types";
import type { ReactUnity, UnityEngine } from "@reactunity/renderer";

export type MyGlobalsType = {
  FPSCounter: FPSCounter;
  Renderer: ReactUnity.ReactRendererBase;
};

export declare global {
  var MyGlobals: MyGlobalsType;
  var Renderer: ReactUnity.ReactRendererBase;
  var StyleHelper: StyleHelper;
  var Q: StyleHelper["Q"];
}

export {};
