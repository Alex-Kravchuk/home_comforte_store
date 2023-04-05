import React from "react";
import {
  CollapseOwnIconContainer,
  CollapseOwnIconWrapper,
} from "./CollapseOwnIcon.styled";

const CollapseOwnIcon = ({ open }) => {
  console.log("pp", open);

  return (
    <CollapseOwnIconWrapper>
      <CollapseOwnIconContainer open={open} />
    </CollapseOwnIconWrapper>
  );
};

export default CollapseOwnIcon;
