import { useEffect } from "react";

export const useMouseLeave = (elementRef, currentHover, handler) => {
  useEffect(() => {
    if (currentHover === false) return;

    const handleClick = (event) => {
      if (!elementRef.current) return;

      if (!elementRef.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mouseover", handleClick);
    return () => document.removeEventListener("mouseover", handleClick);
  }, [currentHover, elementRef, handler]);
};
