import { useState, useTransition } from "react";
import classNames from "classnames";

import ChampionList from "./ChampionList";
import { CHAMPION_CLASS_TO_CHINESE, ChampionClass } from "src/api/hok";
import useChampions from "src/hooks/useChampions";
import type { Style } from "@reactunity/renderer";
import styles from "./ChampionSelect.module.scss";

type ChampionSelectProps = {
  className?: string;
  style?: Style;
  visible?: boolean;
  selectedId?: number;
  onClick?: (id: number) => void;
  onClose?: () => void;
};

function ChampionSelect({
  className,
  style = {},
  visible = true,
  selectedId,
  onClick = () => {},
  onClose = () => {},
}: ChampionSelectProps) {
  const [tab, setTab] = useState<ChampionClass>("ALL");

  return (
    <view
      style={{ ...style, visibility: visible ? "visible" : "hidden" }}
      className={classNames(className, styles.container)}
    >
      {/* Tabs */}
      <view className={styles.tabs}>
        {Object.entries(CHAMPION_CLASS_TO_CHINESE).map(([key, value]) => (
          <view
            key={key}
            className={classNames(styles.button, {
              [styles.selected]: tab === key,
            })}
            onClick={() => setTab(key as ChampionClass)}
          >
            {value}
          </view>
        ))}
      </view>
      {/* Tab Content */}
      <view className={styles.tabContent}>
        {Object.keys(CHAMPION_CLASS_TO_CHINESE).map((key) => (
          <List
            key={key}
            className={styles.list}
            style={
              {
                visibility: visible && key === tab ? "visible" : "hidden",
              } as Style
            }
            championClass={key}
            selectedId={selectedId}
            onClick={onClick}
          />
        ))}
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

function List({ style = {}, className, championClass, selectedId, onClick }) {
  const { champions } = useChampions(championClass);
  return (
    <view className={className} style={{ height: "100%", ...style }}>
      <ChampionList
        champions={champions}
        selectedId={selectedId}
        onClick={onClick}
      />
    </view>
  );
}

export default ChampionSelect;
