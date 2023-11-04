import { useState } from "react";
import { useNavigate } from "src/components/MiniRouter/index";

import defaultAvatar from "../../assets/images/default-avatar.jpg";
import bgImage from "src/assets/images/backgrounds/bg-00.jpg";

import styles from "./index.module.scss";
import Avatar from "src/components/Avatar";
import ScriptSource from "src/components/ScriptSource";
import Scroll from "src/components/Scroll";

function Page() {
  return (
    <view
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <image
        className="object-fit-cover"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
        source={bgImage}
      />
      <view className={styles.container}>
        <Top />

        <view style={{ marginTop: "auto" }}>
          <Entries />
          <view style={{ marginBottom: "50px" }}></view>
          <Tabs />
        </view>
        <view className={styles.socialContainer}>
          <Social />
        </view>
      </view>
    </view>
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
        <Avatar {...user} size={48} />
        <view onClick={() => setShow((prev) => !prev)}>
          {show ? <ScriptSource /> : <text>Script Source</text>}
        </view>
      </view>
    </>
  );
}

function Social() {
  return (
    <view class={styles.social}>
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
      <Scroll className={styles.scroll} direction="vertical">
        <view className={styles.list}>
          <Avatar avatar={defaultAvatar} size={50} />
          <Avatar avatar={defaultAvatar} size={50} />
          <Avatar avatar={defaultAvatar} size={50} />
          <Avatar avatar={defaultAvatar} size={50} />
          <Avatar avatar={defaultAvatar} size={50} />
          <Avatar avatar={defaultAvatar} size={50} />
          <Avatar avatar={defaultAvatar} size={50} />
        </view>
      </Scroll>
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
          onClick={() => {
            navigate("/ranking");
          }}
        >
          排位
        </button>
      </view>
    </view>
  );
}

function Tabs() {
  const navigate = useNavigate();
  return (
    <view
      style={{
        backgroundColor: "#203148",
        paddingBottom: "var(--bottom-margin)",
      }}
    >
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
        <button onClick={() => navigate("/test")}>定制</button>
        <button>备战</button>
        <button>战队</button>
        <button>背包</button>
      </view>
    </view>
  );
}

export default Page;
