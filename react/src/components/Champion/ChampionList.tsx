import { useEffect, useRef, useState } from "react";
import { ChampionData } from "src/api/hok";
import Scroll from "../Scroll";
import ChampionIcon from "./ChampionIcon";
import styles from "./ChampionList.module.scss";
import type { ReactUnity } from "@reactunity/renderer";

type ChampionListProps = {
  champions: ChampionData[];
  selectedId?: number;
  onClick?: (id: number) => void;
};

function ChampionList({
  champions,
  selectedId,
  onClick = () => {},
}: ChampionListProps) {
  const scrollRef = useRef<ReactUnity.UIToolkit.ScrollViewComponent>(null);
  const [smoothness, setSmoothness] = useState(0.05);

  useEffect(() => {
    if (champions.length) {
      setSmoothness(0);
      setTimeout(() => {
        scrollRef.current.ScrollTo(null, 0);
        setTimeout(() => {
          setSmoothness(0.05);
        }, 0);
      }, 0);
    }
  }, [champions]);

  return (
    <view className={styles.container}>
      <view className={styles.scrollWrapper}>
        <Scroll
          direction="vertical"
          smoothness={smoothness}
          scrollRef={scrollRef}
        >
          <view className={styles.list}>
            {champions.map((champion) => (
              <ChampionIcon
                key={champion.id}
                id={champion.id}
                name={champion.name}
                img={champion.img}
                size={64}
                selected={champion.id === selectedId}
                onClick={(id) => {
                  onClick(id);
                }}
              />
            ))}
          </view>
        </Scroll>
      </view>
    </view>
  );
}

export default ChampionList;
