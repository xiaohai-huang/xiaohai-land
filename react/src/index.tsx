import { render } from "@reactunity/renderer";
import "./index.scss";
import { useState, useEffect } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) return <view>Loading...</view>;

  return (
    <view className="app-container">
      <view
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: "2rem",
          backgroundColor: "lightblue",
          padding: "5px",
        }}
      >
        <text
          style={{
            backgroundColor: clicked ? "lightcyan" : "unset",
            color: "black",
            marginRight: "0.3ch",
          }}
        >
          Click
        </text>
        <view
          style={{
            color: clicked ? "red" : "aliceblue",
            cursor: "pointer",
            marginRight: "0.3ch",
          }}
          onClick={() => {
            console.log("clicked");
            setClicked((prev) => !prev);
            setCount((prev) => prev + 1);
          }}
        >
          me
        </view>
        <view
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Minus
        </view>
      </view>
      <button
        onClick={() => {
          setClicked((prev) => !prev);
          setCount((prev) => Math.max(prev + 1, 0));
        }}
      >
        Increase
      </button>
      <text>count: {count}</text>
      {/* @ts-expect-error */}
      <scroll className="items" direction="horizontal">
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <view key={i} className="item">
              {i}
            </view>
          ))}
      </scroll>
    </view>
  );
}

render(<App />);
