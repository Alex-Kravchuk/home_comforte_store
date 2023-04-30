import React from "react";

import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Drawer from "../drawer/Drawer";
import UserInterface from "../userInterface/UserInterface";

import { useGetWindowSize } from "../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../utils/viewport_size_consts";

import { NavContainerWrapper } from "./NavContainer.styled";
import { LogoMenuContainer } from "./NavContainer.styled";

const NavContainer = ({ scrollDown, setOpenSearchField, menuCategories }) => {
  const viewport = useGetWindowSize();

  const mobileScreen = viewport.width < viewport_sizes.ml;
  const smallScreen = viewport.width <= viewport_sizes.xl;
  const bigScreen = viewport.width > viewport_sizes.xl;
  return (
    <NavContainerWrapper>
      <LogoMenuContainer>
        <Drawer
          setOpenSearch={setOpenSearchField}
          smallScreen={smallScreen}
          mobileScreen={mobileScreen}
        />
        <Logo scrollDown={scrollDown} />
        <Menu bigScreen={bigScreen} menuCategories={menuCategories} />
        <UserInterface
          setOpenSearch={setOpenSearchField}
          mobileScreen={mobileScreen}
        />
      </LogoMenuContainer>
    </NavContainerWrapper>
  );
};

export default NavContainer;
