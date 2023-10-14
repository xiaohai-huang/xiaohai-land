import { useEffect, useState } from "react";
import { render } from "@reactunity/renderer";

import { MemoryRouter, Route, Routes } from "react-router";

import { FPSCounter } from "./unity-types/types";
import Index from "./pages/index";
import ChampionSelect from "./pages/champion-select";

import "./index.scss";

function App() {
  return (
    <view className="app-container">
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/champion-select" element={<ChampionSelect />} />
        </Routes>
      </MemoryRouter>
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
