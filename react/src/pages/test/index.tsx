import { useState } from "react";
import { useNavigate } from "src/components/MiniRouter";

function Page() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <view
      className="background-image"
      style={{
        backgroundImage: toggle
          ? "url(https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/564/564-bigskin-1.jpg)"
          : "url(https://media.githubusercontent.com/media/xiaohai-huang/xiaohai-land/master/react/src/assets/images/backgrounds/bg-00.jpg)",
        width: "100%",
        height: "100%",
      }}
    >
      <button
        onClick={() => {
          console.log("download image");
          setToggle((prev) => !prev);
        }}
      >
        Download Image
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to /
      </button>
    </view>
  );
}

export default Page;
