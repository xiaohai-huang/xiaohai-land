import { useEffect, useState } from "react";
import { render } from "@reactunity/renderer";

import MiniRouter, { Route } from "./components/MiniRouter";
import { FPSCounter } from "./unity-types/types";
import Index from "./pages/index";
import ChampionSelect from "./pages/champion-select";
import Ranking from "./pages/ranking";
import useSafeArea from "src/hooks/useSafeArea";

import "./index.scss";

function App() {
  const area = useSafeArea();

  return (
    <view
      className="app-container"
      style={{
        "--safe-top": `${area.top}vh`,
        "--safe-bottom": `${area.bottom}vh`,
        "--safe-left": `${area.left}vw`,
        "--safe-right": `${area.right}vw`,
        "--top-margin": `${area.top + 1}vh`,
        "--bottom-margin": `${area.bottom + 1}vh`,
        "--left-margin": `${Math.max(5, area.left + 2)}vw`,
        "--right-margin": `${Math.max(5, area.right + 2)}vw`,
      }}
    >
      <MiniRouter>
        <Route path="/" element={<Index />} />
        <Route path="/champion-select" element={<ChampionSelect />} />
        <Route path="/ranking" element={<Ranking />} />
      </MiniRouter>
      <view
        className="fps-container"
        style={{
          position: "absolute",
          right: "var(--right-margin)",
          top: "var(--top-margin)",
          zIndex: 10,
        }}
      >
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
