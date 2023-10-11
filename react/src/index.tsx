import { useEffect, useState } from "react";
import { UnityEngine, render } from "@reactunity/renderer";

import { FPSCounter } from "./unity-types/types";
import "./index.scss";

function App() {
  return (
    <view className="app-container">
      <view style={{ marginTop: "10rem" }} />
      <view style={{ position: "absolute", right: "2%" }}>
        <FPS />
      </view>
    </view>
  );
}

function FPS() {
  const [fps, setFPS] = useState(0);

  useEffect(() => {
    const counter = Interop.UnityEngine.GameObject.Find(
      "FPS Counter"
    ).GetComponent("FPSCounter") as FPSCounter;
    const timer = setInterval(() => {
      setFPS(counter.FramesPerSec);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <text>FPS: {fps}</text>;
}

render(<App />);
