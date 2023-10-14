import { useEffect, useState } from "react";
import { render } from "@reactunity/renderer";

import MiniRouter, { Route } from "./components/MiniRouter";
import { FPSCounter } from "./unity-types/types";
import Index from "./pages/index";
import ChampionSelect from "./pages/champion-select";

import "./index.scss";

function App() {
  return (
    <view className="app-container">
      <MiniRouter>
        <Route path="/" element={<Index />} />
        <Route path="/champion-select" element={<ChampionSelect />} />
      </MiniRouter>
      <view style={{ position: "absolute", right: "3%", zIndex: 10 }}>
        <FPS />
      </view>
    </view>
  );
}

function FPS() {
  const [fps, setFPS] = useState(0);

  useEffect(() => {
    const counter = Globals.FPSCounter as FPSCounter;
    const timer = setInterval(() => {
      setFPS(counter.FramesPerSec);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <text style={{ color: "white" }}>FPS: {fps}</text>;
}

render(<App />);
