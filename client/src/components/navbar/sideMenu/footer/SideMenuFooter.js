import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  SHOWROOM_ROUTE,
} from "../../../../utils/routes_consts";
import {
  SideMenuFooterContainer,
  SideMenuFooterItem,
  SideMenuFooterWrapper,
} from "./SideMenuFooter.styled";

const SideMenuFooter = () => {
  return (
    <SideMenuFooterWrapper>
      <SideMenuFooterContainer>
        <SideMenuFooterItem>
          <Link to={SHOWROOM_ROUTE}>Showrooms</Link>
        </SideMenuFooterItem>
        <SideMenuFooterItem>
          <Link to={CONTACT_ROUTE}>Contact</Link>
        </SideMenuFooterItem>
        <SideMenuFooterItem>
          <Link to={ABOUT_ROUTE}>About us</Link>
        </SideMenuFooterItem>
      </SideMenuFooterContainer>
    </SideMenuFooterWrapper>
  );
};

export default SideMenuFooter;
