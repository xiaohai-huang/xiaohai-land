import { useNavigate } from "src/components/MiniRouter";

function Page() {
  const navigate = useNavigate();
  return (
    <view style={{ "--my-color": "lightblue" }}>
      Ranking
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to /
      </button>
      <view
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "var(--my-color)",
        }}
      />
    </view>
  );
}

export default Page;
