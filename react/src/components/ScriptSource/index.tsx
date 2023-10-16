import { useEffect, useState } from "react";
import { ReactUnity } from "@reactunity/renderer";

function ScriptSource() {
  const [source, setSource] = useState("");
  useEffect(() => {
    const canvas = Globals.Renderer as ReactUnity.UGUI.ReactRendererUGUI;
    setSource(canvas.Source.SourcePath);
  }, []);
  return (
    <view>
      <text>{`<b>Source</b>: ${source}`}</text>
    </view>
  );
}

export default ScriptSource;
