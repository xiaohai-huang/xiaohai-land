import type { FPSCounter, XiaohaiLand } from "src/unity-types/types";
import type { ReactUnity } from "@reactunity/renderer";

export type MyGlobalsType = {
  FPSCounter: FPSCounter;
  StyleHelper: XiaohaiLand.UI.StyleHelper;
};

export declare global {
  var MyGlobals: MyGlobalsType;
}

export {};
