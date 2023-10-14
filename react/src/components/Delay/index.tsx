import React, { useEffect, useState } from "react";

type DelayProps = {
  delay?: number;
  children: React.ReactNode;
};

function Delay({ delay = 500, children }: DelayProps) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
  return <view style={{ opacity: show ? 1 : 0 }}>{show && children}</view>;
}

export default Delay;
