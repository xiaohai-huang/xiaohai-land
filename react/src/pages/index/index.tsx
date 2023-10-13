import { useState } from "react";
import { useNavigate } from "react-router";

import defaultAvatar from "../../assets/images/default-avatar.jpg";
import bgImage from "./ShangGuanWanEr.jpg";

import styles from "./index.module.scss";
import Avatar from "src/components/Avatar";
import ScriptSource from "src/components/ScriptSource";

function Page() {
  return (
    <>
      <Hero />
      <view className={styles.container}>
        <Top />
        <view
          className={styles.socialContainer}
          style={{
            position: "absolute",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Social />
        </view>
        <view style={{ marginTop: "auto" }}>
          <Entries />
          <view style={{ marginBottom: "50px" }}></view>
          <Tabs />
        </view>
      </view>
    </>
  );
}

function Top() {
  const user = {
    name: "巅峰小蛋",
    level: 30,
    avatar: defaultAvatar,
  };
  const [show, setShow] = useState(false);
  return (
    <>
      <view
        className={styles.top}
        style={{
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar {...user} size={64} />
        <view onClick={() => setShow((prev) => !prev)}>
          {show ? <ScriptSource /> : <text>Script Source</text>}
        </view>
      </view>
    </>
  );
}

function Social() {
  return (
    <view
      class={styles.social}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80px",
        height: "250px",
        color: "white",
        borderRadius: "5%",
        overflow: "hidden",
      }}
    >
      <view
        style={{
          backgroundColor: "#152240",
          width: "100%",
          height: "30px",
        }}
      >
        <text
          style={{
            height: "100%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          排行
        </text>
      </view>
      <scroll
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: "#15213B",
          width: "100%",
        }}
      >
        <Avatar avatar={defaultAvatar} size={50} />
        <Avatar avatar={defaultAvatar} size={50} />
        <Avatar avatar={defaultAvatar} size={50} />
        <Avatar avatar={defaultAvatar} size={50} />
        <Avatar avatar={defaultAvatar} size={50} />
        <Avatar avatar={defaultAvatar} size={50} />
        <Avatar avatar={defaultAvatar} size={50} />
      </scroll>
      <view
        style={{
          backgroundColor: "#152240",
          width: "100%",
          height: "30px",
        }}
      >
        <text
          style={{
            height: "100%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          {`·>`}
        </text>
      </view>
      <style
        content={`
      scroll::scrollbar { visibility: hidden; }
      `}
        scope="parent"
      />
    </view>
  );
}

function Entries() {
  const navigate = useNavigate();
  return (
    <view>
      <view
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "0 auto",
          gap: "1rem",
        }}
      >
        <button
          style={{
            fontSize: "4rem",
            paddingLeft: "2rem",
            paddingRight: "1rem",
          }}
          onClick={() => {
            navigate("/champion-select");
          }}
        >
          对战
        </button>
        <button
          style={{
            fontSize: "4rem",
            paddingRight: "2rem",
            paddingLeft: "1rem",
          }}
        >
          排位
        </button>
      </view>
    </view>
  );
}

function Tabs() {
  return (
    <view style={{ backgroundColor: "#203148" }}>
      <view
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          margin: "0 auto",
          fontSize: "1.5rem",
          padding: "0.5rem 0",
        }}
      >
        <button>英雄</button>
        <button>定制</button>
        <button>备战</button>
        <button>战队</button>
        <button>背包</button>
      </view>
    </view>
  );
}

function Hero() {
  return (
    <view
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: -1,
      }}
    >
      <image
        src={bgImage}
        style={{
          objectFit: "contain",
          objectPosition: "0px -50px",
        }}
      />
    </view>
  );
}

// test

export default Page;
