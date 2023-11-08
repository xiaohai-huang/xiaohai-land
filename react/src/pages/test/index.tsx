import { useState } from "react";
import { useNavigate } from "src/components/MiniRouter";

function Page() {
  const navigate = useNavigate();
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
      {/* <hello xiaohai="oh my props">
        <text>hello</text>
      </hello>
      <foo bar /> */}
    </view>
  );
}

export default Page;
