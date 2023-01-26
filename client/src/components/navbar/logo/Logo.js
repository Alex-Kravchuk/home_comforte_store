import React from "react";
import {
  ImgContainer,
  LogoContainer,
  LogoTitle,
  LogoTitlePart,
  LogoWrapper,
} from "./Logo.styled";

import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/routes_consts";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to={HOME_ROUTE}>
        <LogoContainer>
          <ImgContainer src={logo} alt="logo" />
          <LogoTitle>
            <LogoTitlePart>HOME</LogoTitlePart>
            <LogoTitlePart>comfort</LogoTitlePart>
          </LogoTitle>
        </LogoContainer>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
