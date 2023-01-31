import { useEffect } from "react";

export const useClickOutside = (elementRef, opened, handler) => {
  useEffect(() => {
    if (!opened) return;

    const handleClick = (event) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [opened, elementRef, handler]);
};
