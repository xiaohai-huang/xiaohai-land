import { useNavigate } from "react-router";

function Page() {
  const navigate = useNavigate();
  return (
    <div>
      '/champion-select' page
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to /
      </button>
      <Test />
    </div>
  );
}

const Test = () => {
  return (
    <div>
      <div
        style={{ height: "200px", display: "flex", flexDirection: "column" }}
      >
        <div style={{ height: "20px" }}>Header</div>
        <scroll
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </scroll>
        <div style={{ height: "20px" }}>Bottom</div>
      </div>
    </div>
  );
};

function Box() {
  return (
    <div
      style={{
        width: "64px",
        height: "64px",
        backgroundColor: "lightblue",
        flexShrink: 0,
      }}
    />
  );
}
export default Page;
