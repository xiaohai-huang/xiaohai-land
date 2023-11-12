import { useEffect, useState } from "react";
import { ChampionData } from "src/api/hok";
import Scroll from "../Scroll";
import ChampionIcon from "./ChampionIcon";
import styles from "./ChampionList.module.scss";

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
  // Need this hack to force it to render
  const [, render] = useState(false);
  useEffect(() => {
    render((prev) => !prev);
  }, [champions.length]);

  return (
    <view className={styles.container}>
      <view className={styles.scrollWrapper}>
        <Scroll direction="vertical">
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
