import React from "react";
import { Link } from "react-router-dom";

import {
  SideMenuFooterWrapper,
  SideMenuFooterContainer,
} from "./SideMenuFooter.styled";

import MobileFooterLinks from "../../../footer/mainLinks/mobileFooterLinks/MobileFooterLinks";

const SideMenuFooter = ({ closeHandler }) => {
  return (
    <SideMenuFooterWrapper>
      <SideMenuFooterContainer>
        <MobileFooterLinks />
      </SideMenuFooterContainer>
    </SideMenuFooterWrapper>
  );
};

export default SideMenuFooter;
