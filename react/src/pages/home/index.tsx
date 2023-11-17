import { useState } from "react";
import { useNavigate } from "src/components/MiniRouter/index";

import defaultAvatar from "../../assets/images/default-avatar.jpg";
import bgImage from "src/assets/images/backgrounds/bg-00.jpg";

import styles from "./index.module.scss";
import Avatar from "src/components/Avatar";
import Scroll from "src/components/Scroll";
import Image from "src/components/Image";
import Delay from "src/components/Delay";
import BattleIcon from "src/assets/images/icons/battle.png";
import RankingIcon from "src/assets/images/icons/ranking.png";
import RankingBadgeIcon from "src/assets/images/icons/ranking-badge.png";
import RankingBadgeCircleIcon from "src/assets/images/icons/ranking-badge-number-circle.png";
// Top
import Settings from "src/assets/images/icons/settings-icon.png";
import MailIcon from "src/assets/images/icons/mail-icon.png";

// Tabs
import TabsBackground from "src/assets/images/icons/bottom-bar.png";
import ChampionTabIcon from "src/assets/images/icons/champion-icon.png";
import CustomizeTabIcon from "src/assets/images/icons/customize-icon.png";
import PrepareTabIcon from "src/assets/images/icons/prepare-icon.png";
import TeamTabIcon from "src/assets/images/icons/team-icon.png";
import QuestTabIcon from "src/assets/images/icons/quest-icon.png";
import BackpackTabIcon from "src/assets/images/icons/backpack-icon.png";

function Page() {
  return (
    <view className={styles.container}>
      <Image className={styles.backgroundImage} src={bgImage} />
      <Top />

      <view style={{ marginTop: "auto" }}>
        <Entries />
        <view style={{ marginBottom: "25px" }}></view>
        <Tabs />
      </view>
      <view className={styles.socialContainer}>
        <Social />
      </view>
    </view>
  );
}

function SimpleIconButton({
  icon,
  onClick,
}: {
  icon: string;
  onClick?: () => void;
}) {
  return (
    <view className={styles.button} onClick={onClick}>
      <Image
        style={{ width: "28px", height: "28px", objectFit: "contain" }}
        src={icon}
      />
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
        <SimpleIconButton icon={MailIcon} />
        <SimpleIconButton
          icon={Settings}
          onClick={() => navigate("/settings")}
        />
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
    <view className={styles.entries}>
      <Image
        className={styles.button}
        src={BattleIcon}
        onClick={() => navigate("/champion-select")}
      />
      <Image
        className={styles.button}
        src={RankingIcon}
        onClick={() => navigate("/ranking")}
      />
      {/* Ranking Badge */}
      <RankingBadge num={15} onClick={() => navigate("/ranking")} />
    </view>
  );
}

type RankingBadgeProps = {
  num: number;
  onClick?: () => void;
};

function RankingBadge({ num, onClick = () => {} }: RankingBadgeProps) {
  const [show, setShow] = useState(false);
  return (
    <view className={styles.badge} onClick={onClick}>
      {/* Badge */}
      <Image
        className={styles.image}
        src={RankingBadgeIcon}
        onLoad={() => setShow(true)}
      />
      {/* Badge Number */}
      {show && (
        <Delay delay={0}>
          <view
            className={styles["number-circle"]}
            style={{ backgroundImage: `url(${RankingBadgeCircleIcon})` }}
          >
            <text className={styles.number}>{num}</text>
          </view>
        </Delay>
      )}
    </view>
  );
}

type IconButtonProps = {
  icon: string;
  label: string;
  onClick?: () => void;
  hideBar?: boolean;
};

function IconButton({
  icon,
  label,
  hideBar = false,
  onClick = () => {},
}: IconButtonProps) {
  return (
    <view className={styles.tab}>
      <view className={styles.content} onClick={onClick}>
        <Image className={styles.icon} src={icon} />
        <text className={styles.label}>{label}</text>
      </view>
      {!hideBar && <view className={styles.verticalBar} />}
    </view>
  );
}

function Tabs() {
  const navigate = useNavigate();
  return (
    <view
      className={styles.tabs}
      style={{ backgroundImage: `url(${TabsBackground})` }}
    >
      <view className={styles.wrapper}>
        <IconButton icon={ChampionTabIcon} label="英雄" />
        <IconButton
          icon={CustomizeTabIcon}
          label="定制"
          onClick={() => navigate("/test")}
        />
        <IconButton icon={PrepareTabIcon} label="备战" />
        <IconButton icon={TeamTabIcon} label="战队" />
        <IconButton icon={QuestTabIcon} label="任务" />
        <IconButton icon={BackpackTabIcon} label="背包" hideBar />
      </view>
    </view>
  );
}

export default Page;
