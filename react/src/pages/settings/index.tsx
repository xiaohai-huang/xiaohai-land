import { useState } from "react";
import classNames from "classnames";

import { useNavigate } from "src/components/MiniRouter";
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

  return (
    <view className={styles.container}>
      <view className={styles.tabs}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go to /
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
        <view>{TABS_INFO[activeTab]}</view>
      </view>
    </view>
  );
}

export default Page;
