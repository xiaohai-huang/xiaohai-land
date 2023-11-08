import { useState } from "react";
import { useNavigate } from "src/components/MiniRouter";
import Image from "src/components/Image";

import styles from "./index.module.scss";

function Page() {
  const navigate = useNavigate();
  const [type, setType] = useState("contain");
  return (
    <view
      className="background-image"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "lightblue",
      }}
    >
      <button
        onClick={async () => {
          // const res = await fetch(
          //   "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
          // );
          // console.log(JSON.stringify(res.headers));
          console.log(Context);
        }}
      >
        Download img
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to /
      </button>
      <Image
        style={{
          objectFit: type,
          width: "100%",
          height: "200px",
        }}
        src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
      />
      <view
        style={{
          marginTop: "1rem",
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        <text>object-fit:{type}</text>
      </view>
      <view
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          fontSize: "2rem",
        }}
      >
        <view className={styles.toggle} style={{ marginRight: "2rem" }}>
          contain
          <toggle
            value={type === "contain"}
            onChange={(e) => {
              e.newValue && setType("contain");
            }}
          />
        </view>
        <view className={styles.toggle} style={{ marginRight: "2rem" }}>
          cover
          <toggle
            value={type === "cover"}
            onChange={(e) => {
              e.newValue && setType("cover");
            }}
          />
        </view>
        <view className={styles.toggle}>
          fill
          <toggle
            value={type === "fill"}
            onChange={(e) => {
              e.newValue && setType("fill");
            }}
          />
        </view>
      </view>
    </view>
  );
}

export default Page;
