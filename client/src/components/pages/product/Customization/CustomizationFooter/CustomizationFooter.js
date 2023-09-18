import React from "react";

import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import { footerLinks } from "./footerLinks";

import {
  FooterLinkName,
  FooterLinkWrap,
  FooterLinkSubWrap,
  FooterLinkInfoContainer,
  CustomizationFooterWrapper,
  CustomizationFooterContainer,
} from "./CustomizationFooter.styled";

const CustomizationFooter = () => {
  return (
    <CustomizationFooterWrapper>
      <CustomizationFooterContainer>
        {footerLinks.map(({ id, to, icon, text }) => (
          <Link to={to} key={id}>
            <FooterLinkWrap>
              <FooterLinkSubWrap>
                {icon}
                <FooterLinkInfoContainer>
                  <FooterLinkName>{text}</FooterLinkName>
                </FooterLinkInfoContainer>
              </FooterLinkSubWrap>
              <ArrowForwardIosOutlinedIcon />
            </FooterLinkWrap>
          </Link>
        ))}
      </CustomizationFooterContainer>
    </CustomizationFooterWrapper>
  );
};

export default CustomizationFooter;
