import { useEffect, useState } from "react";

export const useScrollObserver = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      setScroll(true);
      const onTopOfTHePage = document.documentElement.scrollTop === 0;

      if (onTopOfTHePage) {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return scroll;
};
