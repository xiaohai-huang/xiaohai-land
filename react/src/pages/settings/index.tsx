import { useState } from "react";
import classNames from "classnames";

import { useNavigate } from "src/components/MiniRouter";
import Image from "src/components/Image";
import BackIcon from "src/assets/images/icons/arrow-go-back-line.png";
import BackIconActive from "src/assets/images/icons/arrow-go-back-line-active.png";

import styles from "./index.module.scss";

const TABS_INFO = {
  basic: "基础",
  graphics: "画面",
  controls: "操作",
} as const;

type Tab = keyof typeof TABS_INFO;

function Page() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("basic");
  const [hover, setHover] = useState(false);
  return (
    <view className={styles.container}>
      <view className={styles.tabs}>
        <button
          className={styles.backButton}
          onPointerOver={() => {
            setHover(true);
          }}
          onPointerLeave={() => {
            setHover(false);
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Image
            className={styles.icon}
            src={hover ? BackIconActive : BackIcon}
          />
        </button>
        {Object.entries(TABS_INFO).map(([tab, label]) => (
          <view
            key={tab}
            className={classNames(styles.tab, {
              [styles.active]: activeTab === tab,
            })}
            onClick={() => {
              setActiveTab(tab as Tab);
            }}
          >
            {label}
          </view>
        ))}
      </view>
      <view className={styles.content}>
        <view className={styles.title}>设置</view>
      </view>
    </view>
  );
}

export default Page;
