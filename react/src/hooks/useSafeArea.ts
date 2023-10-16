import { useEffect, useState } from "react";

export default function useSafeArea() {
  const [safeArea, setSafeArea] = useState({
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
  });

  useEffect(() => {
    const screen = Interop.UnityEngine.Screen;
    const width = screen.width;
    const height = screen.height;
    const area = Interop.UnityEngine.Screen.safeArea;
    const output = {
      left: (area.left / width) * 100,
      right: (1 - area.right / width) * 100,
      top: (area.top / height) * 100,
      bottom: (1 - area.bottom / height) * 100,
    };
    setSafeArea(output);
    // console.log(JSON.stringify(output));
  }, []);
  return safeArea;
}
