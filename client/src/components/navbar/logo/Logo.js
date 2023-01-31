import React from "react";
import {
  LogoTitle,
  LogoTitlePart,
  LogoWrapper,
  LogoContainer,
} from "./Logo.styled";

import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/routes_consts";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to={HOME_ROUTE}>
        <LogoContainer>
          <LogoTitle>
            <LogoTitlePart>HOME COMFORT</LogoTitlePart>
          </LogoTitle>
        </LogoContainer>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
