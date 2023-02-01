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
import { useGetWindowSize } from "../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../utils/vieport_size_consts";

const NavBar = () => {
  const [openSearchField, setOpenSearchField] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const viewport = useGetWindowSize();

  const mobileScreen = viewport < viewport_sizes.ml;
  const smallScreen = viewport <= viewport_sizes.xl;
  const bigScreen = viewport > viewport_sizes.xl;

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

  return (
    <NavWrapper scrollDown={scrollDown} openSearchField={openSearchField}>
      <RelativeContainer scrollDown={scrollDown}>
        <EmptyContainer />
        <NavContainer>
          <LogoMenuContainer>
            <Drawer
              setOpenSearch={setOpenSearchField}
              smallScreen={smallScreen}
              mobileScreen={mobileScreen}
            />
            <Logo scrollDown={scrollDown} />
            <Menu bigScreen={bigScreen} />
            <UserInterface
              setOpenSearch={setOpenSearchField}
              mobileScreen={mobileScreen}
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
