import type { FPSCounter, XiaohaiLand } from "src/unity-types/types";
import type { ReactUnity } from "@reactunity/renderer";

export type MyGlobalsType = {
  FPSCounter: FPSCounter;
  Renderer: ReactUnity.ReactRendererBase;
};

export declare global {
  var MyGlobals: MyGlobalsType;
  var Renderer: ReactUnity.ReactRendererBase;
}

export {};
