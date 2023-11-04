import styles from "./index.module.scss";

type AvatarProps = {
  name?: string;
  level?: number;
  avatar: string;
  size?: number;
};

function Avatar({ name, level, avatar, size = 64 }: AvatarProps) {
  return (
    <view className={styles.avatar}>
      <view
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "10%",
          overflow: "hidden",
          border: "3px solid yellow",
        }}
      >
        <image src={avatar} />
      </view>
      {name ? (
        <view style={{ display: "flex", marginLeft: "10px" }}>
          <view style={{ marginBottom: "0.3rem" }}>
            <text>{name}</text>
          </view>
          <view>
            <text>{`Lv.<b>${level}</b>`}</text>
          </view>
        </view>
      ) : null}
    </view>
  );
}

export default Avatar;
