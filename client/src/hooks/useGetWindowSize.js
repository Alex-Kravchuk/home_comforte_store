import { useEffect, useState } from "react";

export const useGetWindowSize = () => {
  const [size, setSize] = useState(null);

  useEffect(() => {
    const resizeListenter = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", resizeListenter);
    return () => window.removeEventListener("resize", resizeListenter);
  }, [size]);
  
  return size;
};
