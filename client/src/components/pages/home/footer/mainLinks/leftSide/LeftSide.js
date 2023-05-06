import React from "react";

import MobileFooterLinks from "../mobileFooterLinks/MobileFooterLinks";

import { useGetWindowSize } from "../../../../../../hooks/useGetWindowSize";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";
import { mobileFooterLinks_leftSide_config } from "../mobileFooterLinks/mobileFooterLinks_config";

import {
  MLItem,
  MLColumn,
  MLColumnTitle,
  MLItemsContainer,
} from "../MainLinks.styled";

const LeftSide = () => {
  const viewport = useGetWindowSize();
  const smallScreen = viewport.width <= viewport_sizes.l;
  return (
    <MLItemsContainer>
      {smallScreen ? (
        <MobileFooterLinks />
      ) : (
        mobileFooterLinks_leftSide_config.map(({ id, title, subTitles }) => (
          <MLColumn key={id}>
            <MLColumnTitle>{title}</MLColumnTitle>
            {subTitles.map((subTit, index) => (
              <MLItem key={index}>{subTit}</MLItem>
            ))}
          </MLColumn>
        ))
      )}
    </MLItemsContainer>
  );
};

export default LeftSide;
