import { useState } from "react";
import { useNavigate } from "react-router";

import myImage1 from "src/assets/images/backgrounds/bg-01.jpg";
import myImage2 from "src/assets/images/backgrounds/bg-02.jpg";

function Page() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <view
      className="champion-select"
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${myImage1})`,
      }}
    >
      '/champion-select' page
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to /
      </button>
      <Test />
      <view>
        <button onClick={() => setShow((prev) => !prev)}>Show</button>
        {show && <image src={myImage2} />}
      </view>
    </view>
  );
}

const Test = () => {
  return (
    <div>
      <div
        style={{ height: "200px", display: "flex", flexDirection: "column" }}
      >
        <div style={{ height: "20px" }}>Header</div>
        <scroll
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </scroll>
        <div style={{ height: "20px" }}>Bottom</div>
      </div>
    </div>
  );
};

function Box() {
  return (
    <div
      style={{
        width: "64px",
        height: "64px",
        backgroundColor: "lightblue",
        flexShrink: 0,
      }}
    />
  );
}
export default Page;
