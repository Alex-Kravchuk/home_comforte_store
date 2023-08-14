import React, { useState } from "react";
import SearchField from "../../../../../searchField/SearchField";
import { SubPageContainer, SubPageWrapper } from "../TabSubPages.styled";

const Overview = () => {
  const [loading, setLoading] = useState(false);
  return (
    <SubPageWrapper>
      <SearchField loading={loading} />
      <SubPageContainer>Overview tub</SubPageContainer>
    </SubPageWrapper>
  );
};

export default Overview;
