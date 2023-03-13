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
  const scrollTop = () => window.scrollTo(0, 0);
  return (
    <LogoWrapper>
      <Link to={HOME_ROUTE}>
        <LogoContainer>
          <LogoTitle>
            <LogoTitlePart onClick={scrollTop}>HOME COMFORT</LogoTitlePart>
          </LogoTitle>
        </LogoContainer>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
