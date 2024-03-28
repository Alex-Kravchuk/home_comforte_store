import React from "react";

import {  useSelector } from "react-redux";

import OverviewCollapse from "./OverviewCollapse/OverviewCollapse";

import {
  SubPageContainer,
  SubPageWrapper,
} from "../../../AdminProducts.styled";

const Overview = () => {
  const { data: menuData } = useSelector((state) => state.menuData);
  
  return (
    <SubPageWrapper>
      <SubPageContainer>
        <OverviewCollapse />
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default Overview;
