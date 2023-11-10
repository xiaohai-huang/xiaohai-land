import { useEffect, useState } from "react";
import { render } from "@reactunity/renderer";

import useSafeArea from "src/hooks/useSafeArea";
import MiniRouter, { Route } from "./components/MiniRouter";
import Index from "./pages/index";
import ChampionSelect from "./pages/champion-select";
import Ranking from "./pages/ranking";
import TestPage from "./pages/test";
import SettingsPage from "./pages/settings";

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
        <Route path="/" keepAlive element={<Index />} />
        <Route path="/champion-select" element={<ChampionSelect />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/test" element={<TestPage />} />
      </MiniRouter>
    </view>
  );
}

function FPS() {
  const [fps, setFPS] = useState(0);

  useEffect(() => {
    const counter = MyGlobals.FPSCounter;
    const timer = setInterval(() => {
      setFPS(counter.FramesPerSec);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <text style={{ color: "white" }}>FPS: {fps}</text>;
}

// Mount global variables
// @ts-expect-error
globalThis.MyGlobals = Globals;
globalThis.Renderer = MyGlobals.Renderer;

render(<App />);
