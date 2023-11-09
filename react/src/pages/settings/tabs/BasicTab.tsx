import { useState } from "react";
import Select from "src/components/Select";
import styles from "./BasicTab.module.scss";

type ScriptSource = "production" | "local";

function BasicTab() {
  const [scriptSource, setScriptSource] = useState<ScriptSource>("production");

  return (
    <view className={styles.container}>
      <view className={styles.item}>
        <view className={styles.label}>Script Source</view>
        <view className={styles.content}>
          <Select value={scriptSource} onChange={(v) => setScriptSource(v)}>
            <Select.Option value="production">Production</Select.Option>
            <Select.Option value="local">Local Dev</Select.Option>
          </Select>
        </view>
      </view>
      <view className={styles.bottom}>
        <view className={styles.restart}>
          <button className={styles.btn}>Restart</button>
        </view>
      </view>
    </view>
  );
}

export default BasicTab;
