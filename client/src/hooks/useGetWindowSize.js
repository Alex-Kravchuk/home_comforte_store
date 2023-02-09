import { useEffect, useState } from "react";

export const useGetWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resizeListenter = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", resizeListenter);
    return () => window.removeEventListener("resize", resizeListenter);
  }, [size]);

  return size || window.innerWidth;
};
