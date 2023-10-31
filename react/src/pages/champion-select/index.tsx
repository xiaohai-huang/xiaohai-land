import { useState } from "react";
import { useNavigate } from "src/components/MiniRouter/index";

import myImage1 from "src/assets/images/backgrounds/bg-01.jpg";
import ChampionIcon from "src/components/Champion/ChampionIcon";
import useChampions from "src/hooks/useChampions";
import styles from "./index.module.scss";
function Page() {
  const navigate = useNavigate();
  const { champions } = useChampions();
  const [selectedChampion, setSelectedChampion] = useState(-1);

  return (
    <view
      className={styles.page}
      style={{
        backgroundImage: `url(${myImage1})`,
      }}
    >
      {/* <text>'/champion-select' page</text> */}
      <scroll className={styles.listScroll}>
        <view className={styles.list}>
          {champions.slice(0, 19).map((champion) => (
            <ChampionIcon
              key={champion.id}
              id={champion.id}
              name={champion.name}
              img={champion.img}
              size={64}
              selected={champion.id === selectedChampion}
              onClick={(id) => {
                setSelectedChampion(id);
              }}
            />
          ))}
        </view>
      </scroll>
      <view className={styles.previewSection}>champion model</view>
      <view className={styles.rightSection}>
        <button
          style={{ width: "100px", backgroundColor: "lightblue" }}
          onClick={() => {
            navigate("/");
          }}
        >
          取消
        </button>
      </view>
    </view>
  );
}

export default Page;
