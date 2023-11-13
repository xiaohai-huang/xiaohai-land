import { useState, useMemo, useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from "src/components/MiniRouter/index";

import myImage1 from "src/assets/images/backgrounds/bg-01.jpg";
import ChampionIcon from "src/components/Champion/ChampionIcon";
import useChampions from "src/hooks/useChampions";
import { type ChampionData } from "src/api/hok";
import Scroll from "src/components/Scroll";
import ChampionSelect from "src/components/Champion/ChampionSelect";
import styles from "./index.module.scss";

function Page() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"champion" | "skin">("champion");
  const { champions } = useChampions("ALL");
  const [selectedChampionId, setSelectedChampion] = useState(-1);
  const [selectedSkinId, setSelectedSkinId] = useState(1);
  const champion: ChampionData | undefined = useMemo(
    () => champions.find((champ) => champ.id === selectedChampionId),
    [champions, selectedChampionId]
  );
  const championBackgroundImage = useMemo(
    () =>
      champion?.skins.find((skin) => skin.id === selectedSkinId)?.largeImage ??
      "",
    [champion, selectedSkinId]
  );
  const [expandButtonPos, setExpandButtonPos] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [showChampionsPanel, setShowChampionsPanel] = useState(false);
  const [championsPanelCached, setChampionsPanelCached] = useState(false);

  useEffect(() => {
    if (showChampionsPanel) {
      setChampionsPanelCached(true);
    }
  }, [showChampionsPanel]);

  const Left = (
    <view className={styles.leftSection}>
      {/* 英雄|皮肤 Tabs */}
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
      {/* Champions Tab */}
      <view className={styles.listContainer}>
        <view
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <view
            className="champions"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              paddingLeft: "var(--left-margin)",
              visibility:
                tab === "champion" && !showChampionsPanel
                  ? "visible"
                  : "hidden",
            }}
          >
            <Scroll direction="vertical" style={{ flexShrink: 0 }}>
              <view className={styles.list}>
                {champions.slice(0, 19).map((champion, i) => (
                  <ChampionIcon
                    key={champion.id}
                    id={champion.id}
                    name={champion.name}
                    img={champion.img}
                    size={64}
                    selected={champion.id === selectedChampionId}
                    onClick={(id) => {
                      setSelectedChampion(id);
                      setSelectedSkinId(1);
                    }}
                  />
                ))}
              </view>
            </Scroll>
          </view>
          <view
            className="skins"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              paddingLeft: "var(--left-margin)",
              visibility: tab === "skin" ? "visible" : "hidden",
            }}
          >
            <Scroll direction="vertical" style={{ flexShrink: 0 }}>
              <view className={styles.list}>
                {champion?.skins.map((skin, i) => (
                  <ChampionIcon
                    key={skin.id}
                    id={skin.id}
                    name={i === 0 ? "经典" : skin.name}
                    img={skin.smallImage}
                    size={64}
                    selected={skin.id === selectedSkinId}
                    onClick={(id) => {
                      setSelectedSkinId(id);
                    }}
                  />
                ))}
              </view>
            </Scroll>
          </view>
        </view>
      </view>
      {/* Expand Button Position*/}
      <view
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
        }}
        onAttachToPanel={(_, { Element }) => {
          setTimeout(() => {
            setExpandButtonPos({
              x: Element.worldBound.x,
              y: Element.worldBound.y,
            });
          }, 0);
        }}
      ></view>
    </view>
  );

  const Middle = (
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
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          >
            请选择您的出战英雄
          </view>
        ) : (
          <>
            {/* Champion's Background Image */}
            <image
              style={{
                objectFit: "cover",
                position: "absolute",
                left: 0,
                top: 0,
                width: "105%",
                height: "105%",
              }}
              source={championBackgroundImage}
            />
            <text style={{ marginTop: "var(--top-margin)", color: "white" }}>
              {champion.name}
            </text>
          </>
        )}
      </view>
    </view>
  );

  const Right = (
    <view className={styles.rightSection}>
      <button
        style={{
          marginTop: "var(--top-margin)",
          width: "100px",
          backgroundColor: "lightblue",
        }}
        onClick={() => {
          setSelectedChampion(-1);
          setSelectedSkinId(1);
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
          padding: "0.5rem",
        }}
        disabled={selectedChampionId === -1}
        onClick={() => {
          console.log("click confirm");
        }}
      >
        确定
      </button>
    </view>
  );
  const showExpandButton =
    !showChampionsPanel && expandButtonPos !== null && tab === "champion";
  const ExpandButton = showExpandButton && (
    <view
      className={styles.expandButton}
      style={{
        position: "absolute",
        left: `${expandButtonPos.x}px`,
        top: `${expandButtonPos.y * 0.8}px`,
      }}
      onClick={() => {
        setShowChampionsPanel(true);
      }}
    >
      {">"}
    </view>
  );

  const ChampionLargeSelect = championsPanelCached && (
    <view
      className={styles.championLargeSelectWrapper}
      onAttachToPanel={(_, { Element }) => {
        // Disable pointer event for this element
        Element.pickingMode = Interop.UnityEngine.UIElements.PickingMode.Ignore;
      }}
    >
      <ChampionSelect
        className={styles.select}
        visible={showChampionsPanel}
        selectedId={selectedChampionId}
        onClick={(id) => {
          setSelectedChampion(id);
          setSelectedSkinId(1);
        }}
        onClose={() => setShowChampionsPanel(false)}
      />
    </view>
  );

  return (
    <view className={styles.page}>
      <image
        style={{
          objectFit: "cover",
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
        source={myImage1}
      />
      {Left}
      {Middle}
      {Right}
      {ExpandButton}

      {ChampionLargeSelect}
    </view>
  );
}

export default Page;
