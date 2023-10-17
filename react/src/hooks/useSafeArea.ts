import { useEffect, useState } from "react";
import { type UnityEngine } from "@reactunity/renderer";
import { type OrientationManager } from "src/unity-types/types";

export default function useSafeArea() {
  const [safeArea, setSafeArea] = useState({
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
  });

  useEffect(() => {
    setSafeArea(getSafeArea());
    const deviceChange = Globals["OrientationManager"] as OrientationManager;
    const unsubscribe = deviceChange.AddListener(
      (orientation: UnityEngine.DeviceOrientation) => {
        setSafeArea(getSafeArea());
      }
    );

    return () => unsubscribe();
  }, []);
  return safeArea;
}

function getSafeArea() {
  const screen = Interop.UnityEngine.Screen;
  const width = screen.width;
  const height = screen.height;
  const area = Interop.UnityEngine.Screen.safeArea;
  const output = {
    left: (area.xMin / width) * 100,
    right: (1 - area.xMax / width) * 100,
    top: (area.yMin / height) * 100,
    bottom: (1 - area.yMax / height) * 100,
  };
  return output;
}
