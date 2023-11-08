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
        }}
      >
        <image src={avatar} />
      </view>
      {name ? (
        <view
          style={{ display: "flex", marginLeft: "10px", fontSize: "0.75rem" }}
        >
          <view>
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
