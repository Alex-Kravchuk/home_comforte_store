import React, { useState } from "react";
import SearchField from "../../../../../searchField/SearchField";
import { SubPageContainer, SubPageWrapper } from "../TabSubPages.styled";
import OverviewCollapse from "./OverviewCollapse/OverviewCollapse";

const Overview = () => {
  const [loading, setLoading] = useState(false);
  return (
    <SubPageWrapper>
      <SearchField loading={loading} />
      <SubPageContainer>
        <OverviewCollapse />
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default Overview;
