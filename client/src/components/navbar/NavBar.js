import React, { useEffect, useRef, useState } from "react";

import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import {
  EmptyContainer,
  LogoMenuContainer,
  NavContainer,
  NavWrapper,
  RelativeContainer,
} from "./NavBar.styled";
import SearchField from "./searchField/SearchField";
import UserInterface from "./userInterface/UserInterface";

import Drawer from "./drawer/Drawer";

const NavBar = () => {
  const [openSearchField, setOpenSearchField] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [dimenison, setDimenison] = useState({
    width: document.documentElement.offsetWidth,
    height: document.documentElement.offsetHeight,
  });
  const refTarget = useRef();

  useEffect(() => {
    const scrollListener = () => {
      setScrollDown(true);
      const onTopOfTHePage = document.documentElement.scrollTop === 0;

      if (onTopOfTHePage) {
        setScrollDown(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    const resizeListenter = () => {
      if (refTarget.current) {
        setDimenison({
          width: refTarget.current.offsetWidth,
          height: refTarget.current.offsetHeight,
        });
      }
    };

    window.addEventListener("resize", resizeListenter);
    return () => window.removeEventListener("resize", resizeListenter);
  }, []);

  return (
    <NavWrapper
      scrollDown={scrollDown}
      openSearchField={openSearchField}
      ref={refTarget}
    >
      <RelativeContainer scrollDown={scrollDown}>
        <EmptyContainer />
        <NavContainer>
          <LogoMenuContainer>
            <Drawer
              setOpenSearch={setOpenSearchField}
              smallScreen={dimenison.width <= 1024}
              mobileScreen={dimenison.width < 510}
            />
            <Logo scrollDown={scrollDown} />
            <Menu bigScreen={dimenison.width > 1024} />
            <UserInterface
              setOpenSearch={setOpenSearchField}
              mobileScreen={dimenison.width < 510}
            />
          </LogoMenuContainer>
        </NavContainer>
        <SearchField
          opened={openSearchField}
          setOpenSearch={setOpenSearchField}
        />
      </RelativeContainer>
    </NavWrapper>
  );
};

export default NavBar;
