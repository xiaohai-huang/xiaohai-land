import { useRef, useState } from "react";
import { useNavigate } from "src/components/MiniRouter";
import Image from "src/components/Image";

import styles from "./index.module.scss";
import type { ReactUnity } from "@reactunity/renderer";

function Page() {
  const navigate = useNavigate();
  const [type, setType] = useState("contain");
  const inputRef = useRef<ReactUnity.UIToolkit.TextFieldComponent>(null);
  const [show, setShow] = useState(false);
  return (
    <view
      className={styles.container}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to /
      </button>
      <input
        ref={inputRef}
        label="normal"
        onKeyDownCapture={(e) => {
          console.log("keydown");
        }}
        onClick={() => setShow(true)}
      />
      <input
        label="hideMobileInput"
        onKeyDownCapture={(e) => {
          console.log("keydown");
        }}
        onAttachToPanel={(_, { Element }) => {
          Element.hideMobileInput = true;
        }}
      />
      {show && (
        <view
          onClick={() => setShow(false)}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
      )}
    </view>
  );
}

export default Page;
