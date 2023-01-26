import React from "react";

import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import { LogoMenuContainer, NavContainer, NavWrapper } from "./NavBar.styled";
import UserInterface from "./userInterface/UserInterface";

const NavBar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <LogoMenuContainer>
          <Logo />
          <Menu />
        </LogoMenuContainer>
        <UserInterface />
      </NavContainer>
    </NavWrapper>
  );
};

export default NavBar;
