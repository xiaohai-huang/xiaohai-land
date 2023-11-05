import { useState } from "react";
import classNames from "classnames";

import ChampionList from "./ChampionList";
import { ChampionData } from "src/api/hok";
import type { Style } from "@reactunity/renderer";

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
  style,
  onClose = () => {},
}: ChampionSelectProps) {
  const [champions, setChampions] = useState<ChampionData[]>([]);
  const [tab, setTab] = useState<Tab>("ALL");

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(33, 41, 60, 0.95)",
        ...style,
      }}
      className={classNames(className, "champion-select")}
    >
      {/* Tabs */}
      <view
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: "45px",
          borderBottom: "1px solid #2c394a",
        }}
      >
        {Object.entries(CHAMPION_CLASS_MAP).map(([key, value]) => (
          <view
            key={key}
            style={{
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
              color: "#829fc9",
            }}
          >
            {value}
          </view>
        ))}
      </view>
      {/* Tab Content */}
      <view style={{ flex: "1" }}>
        <ChampionList champions={champions} />
        <view
          style={{
            height: "100%",
            justifyContent: "center",
            position: "absolute",
            right: "-30px",
          }}
        >
          <view
            style={{
              width: "30px",
              height: "60px",
              backgroundColor: "#152240",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              borderTopRightRadius: "20%",
              borderBottomRightRadius: "20%",
            }}
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
