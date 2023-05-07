import React from "react";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import { rightSideConfig } from "../mobileFooterLinks/mobileFooterLinks_config";

import {
  MLFAQItems,
  MLFAQTitle,
  MLFAQItemWrap,
  MLFAQItemName,
  MLFAQTitleSub,
  MLFAQContainer,
  MLFAQTitleMain,
  MLFAQItemAddInfo,
  MLFAQItemSubWrap,
  MLFAQInfoContainer,
} from "../MainLinks.styled";

const RightSide = () => {
  return (
    <MLFAQContainer>
      <MLFAQTitle>
        <MLFAQTitleMain>Questions? We're here to help</MLFAQTitleMain>
        <MLFAQTitleSub>Available 9am-7pm, Monday-Friday.</MLFAQTitleSub>
      </MLFAQTitle>
      <MLFAQItems>
        {rightSideConfig.map(({ id, title, subTitle, icon }) => (
          <MLFAQItemWrap key={id}>
            <MLFAQItemSubWrap>
              {icon}
              <MLFAQInfoContainer>
                <MLFAQItemName>{title}</MLFAQItemName>
                <MLFAQItemAddInfo>{subTitle}</MLFAQItemAddInfo>
              </MLFAQInfoContainer>
            </MLFAQItemSubWrap>
            <ArrowForwardIosOutlinedIcon />
          </MLFAQItemWrap>
        ))}
      </MLFAQItems>
    </MLFAQContainer>
  );
};

export default RightSide;
