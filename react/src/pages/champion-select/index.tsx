import { useState, useMemo } from "react";
import { useNavigate } from "src/components/MiniRouter/index";

import myImage1 from "src/assets/images/backgrounds/bg-01.jpg";
import ChampionIcon from "src/components/Champion/ChampionIcon";
import useChampions from "src/hooks/useChampions";
import styles from "./index.module.scss";
import classNames from "classnames";

function Page() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"champion" | "skin">("champion");
  const { champions } = useChampions();
  const [selectedChampionId, setSelectedChampion] = useState(-1);
  const [selectedSkin, setSelectedSkin] = useState("原画");
  const champion = useMemo(
    () => champions.find((champ) => champ.id === selectedChampionId),
    [champions, selectedChampionId]
  );

  return (
    <view
      className={styles.page}
      style={{
        backgroundImage: `url(${myImage1})`,
        backgroundSize: "fill",
        backgroundPosition: "50% 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <view className={styles.leftSection}>
        <view className={styles.tabs}>
          <view
            className={classNames(styles.button, {
              [styles.selected]: tab === "champion",
            })}
            onClick={() => setTab("champion")}
          >
            英雄
          </view>
          <view
            className={classNames(styles.button, {
              [styles.selected]: tab === "skin",
            })}
            onClick={() => setTab("skin")}
          >
            皮肤
          </view>
        </view>
        <view
          className={styles.listConatiner}
          style={{
            visibility: tab === "champion" ? "visible" : "hidden",
            zIndex: 2,
          }}
        >
          <scroll className={styles.listScroll}>
            <view className={styles.list}>
              {champions.slice(0, 19).map((champion) => (
                <ChampionIcon
                  key={champion.id}
                  id={champion.id}
                  name={champion.name}
                  img={champion.img}
                  size={64}
                  selected={champion.id === selectedChampionId}
                  onClick={(id) => {
                    setSelectedChampion(id);
                    setSelectedSkin("原画");
                  }}
                />
              ))}
            </view>
          </scroll>
        </view>

        <view
          className={styles.listConatiner}
          style={{
            visibility: tab === "skin" ? "visible" : "hidden",
            zIndex: 2,
          }}
        >
          <scroll className={styles.listScroll}>
            <view className={styles.list}>
              {champion?.skins.map((skin) => (
                <ChampionIcon
                  key={skin.name}
                  id={skin.name}
                  name={skin.name}
                  img={skin.smallImage}
                  size={64}
                  selected={skin.name === selectedSkin}
                  onClick={(id) => {
                    setSelectedSkin(id);
                  }}
                />
              ))}
            </view>
          </scroll>
        </view>
      </view>
      {/* Middle Section */}
      <view className={styles.previewSection}>
        <view className={styles.container}>
          {selectedChampionId === -1 ? (
            <view
              style={{
                fontSize: "2.5rem",
                color: "white",
                margin: "auto 0",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              请选择一个英雄
            </view>
          ) : (
            <>
              <image
                style={{
                  position: "absolute",
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
                source={
                  champion.skins.find((skin) => skin.name === selectedSkin)
                    .largeImage
                }
              />
              <text style={{ marginTop: "var(--top-margin)", color: "white" }}>
                {champion.name}
              </text>
            </>
          )}
        </view>
      </view>
      {/* Right Section */}
      <view className={styles.rightSection}>
        <button
          style={{
            marginTop: "var(--top-margin)",
            width: "100px",
            backgroundColor: "lightblue",
          }}
          onClick={() => {
            setSelectedChampion(-1);
            setSelectedSkin("原画");
            navigate("/");
          }}
        >
          取消
        </button>
        <view className={styles.selectedList}>
          {selectedChampionId !== -1 && (
            <ChampionIcon
              id={champion.id}
              img={champion.img}
              name={champion.name}
              size={64}
              selected
              showBorder={false}
            />
          )}
        </view>
        <button
          className={styles.confirm}
          style={{
            padding: "1rem",
          }}
          disabled={selectedChampionId === -1}
          onClick={() => {
            console.log("click confirm");
          }}
        >
          锁定英雄
        </button>
      </view>
    </view>
  );
}

export default Page;
