import { useState } from "react";
import classNames from "classnames";

import ChampionList from "./ChampionList";
import { ChampionData } from "src/api/hok";
import type { Style } from "@reactunity/renderer";
import styles from "./ChampionSelect.module.scss";

type Tab =
  | "ALL"
  | "TANK"
  | "WARRIOR"
  | "ASSASSIN"
  | "MAGE"
  | "MARKSMAN"
  | "SUPPORT";

const CHAMPION_CLASS_MAP: { [key in Tab]: string } = {
  ALL: "全部",
  TANK: "坦克",
  WARRIOR: "战士",
  MAGE: "法师",
  ASSASSIN: "刺客",
  MARKSMAN: "射手",
  SUPPORT: "辅助",
};
type ChampionSelectProps = {
  className?: string;
  style?: Style;
  onClose?: () => void;
};
function ChampionSelect({
  className,
  style = {},
  onClose = () => {},
}: ChampionSelectProps) {
  const [champions, setChampions] = useState<ChampionData[]>([]);
  const [tab, setTab] = useState<Tab>("ALL");

  return (
    <view style={style} className={classNames(className, styles.container)}>
      {/* Tabs */}
      <view className={styles.tabs}>
        {Object.entries(CHAMPION_CLASS_MAP).map(([key, value]) => (
          <view
            key={key}
            className={classNames(styles.button, {
              [styles.selected]: tab === key,
            })}
            onClick={() => setTab(key as Tab)}
          >
            {value}
          </view>
        ))}
      </view>
      {/* Tab Content */}
      <view className={styles.tabContent}>
        <ChampionList champions={champions} />
        <view className={styles.closeButtonWrapper}>
          <view
            className={styles.closeButton}
            onClick={() => {
              onClose();
            }}
          >
            {"<"}
          </view>
        </view>
      </view>
    </view>
  );
}

export default ChampionSelect;
