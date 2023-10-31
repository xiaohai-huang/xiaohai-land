type ChampionIconProps<T> = {
  id: T;
  name: string;
  img: string;
  size: number;
  selected: boolean;
  onClick: (id: T) => void;
};

const borderRadius = "10%";

function ChampionIcon<T>({
  id,
  name,
  img,
  size,
  selected,
  onClick = () => {},
}: ChampionIconProps<T>) {
  const selectedEffect = (
    <view
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: "1.5px solid yellow",
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius,
        backgroundColor: "rgba(255,242,0,0.03)",
      }}
    />
  );
  return (
    <view style={{ width: size }} onClick={() => onClick(id)}>
      <view
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius,
          overflow: "hidden",
        }}
      >
        <image source={img} />
      </view>
      {selected && selectedEffect}
      <text
        style={{
          textAlign: "center",
          marginTop: "0.1rem",
          fontSize: "0.8rem",
          color: selected ? "white" : "gray",
        }}
      >
        {name}
      </text>
    </view>
  );
}

export default ChampionIcon;
