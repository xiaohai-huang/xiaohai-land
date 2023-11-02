import { useEffect, useState } from "react";
import MyGlobals from "src/unity-types/MyGlobals";

function ScriptSource() {
  const [source, setSource] = useState("");
  useEffect(() => {
    const canvas = MyGlobals.Renderer;
    setSource(canvas.Source.SourcePath);
  }, []);
  return (
    <view>
      <text>{`<b>Source</b>: ${source}`}</text>
    </view>
  );
}

export default ScriptSource;
