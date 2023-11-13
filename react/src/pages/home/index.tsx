import { useNavigate } from "src/components/MiniRouter/index";

import defaultAvatar from "../../assets/images/default-avatar.jpg";
import bgImage from "src/assets/images/backgrounds/bg-00.jpg";

import styles from "./index.module.scss";
import Avatar from "src/components/Avatar";
import Scroll from "src/components/Scroll";
import Image from "src/components/Image";
import SettingsIcon from "src/assets/images/icons/cog.png";
import BattleIcon from "src/assets/images/icons/battle.png";
import RankingIcon from "src/assets/images/icons/ranking.png";
import RankingBadgeIcon from "src/assets/images/icons/ranking-badge.png";
import RankingBadgeCircleIcon from "src/assets/images/icons/ranking-badge-number-circle.png";

function Page() {
  return (
    <view className={styles.container}>
      <Image className={styles.backgroundImage} src={bgImage} />
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
  );
}

function Top() {
  const user = {
    name: "巅峰小蛋",
    level: 30,
    avatar: defaultAvatar,
  };
  const navigate = useNavigate();
  return (
    <view className={styles.top}>
      <Avatar {...user} size={32} />
      <view className={styles.right}>
        <view
          style={{
            width: 64,
            height: 64,
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            navigate("/settings");
          }}
        >
          <Image style={{ width: 32, height: 32 }} src={SettingsIcon} />
        </view>
      </view>
    </view>
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
    <view
      className={styles.entries}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "0 auto",
        height: "110px",
      }}
    >
      <Image src={BattleIcon} />

      <Image src={RankingIcon} />

      {/* Ranking Badge */}
      <view
        style={{
          position: "absolute",
          height: "140px",
          width: "140px",
          transform: "translate(0, 10px)",
        }}
      >
        <Image
          style={{
            objectFit: "contain",
          }}
          src={RankingBadgeIcon}
        />
        <view
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translate(-50%, 100%)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              position: "absolute",
              objectFit: "contain",
              width: "30px",
              height: "30px",
            }}
            src={RankingBadgeCircleIcon}
          />
          <text
            style={{ color: "#FAF0DD", fontSize: "14px", fontWeight: "bold" }}
          >
            5
          </text>
        </view>
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
        <button onClick={() => navigate("/test")}>测试</button>
        <button>备战</button>
        <button>战队</button>
        <button>背包</button>
      </view>
    </view>
  );
}

export default Page;
