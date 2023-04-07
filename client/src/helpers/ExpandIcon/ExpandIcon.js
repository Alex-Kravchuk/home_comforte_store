import React from "react";

import {
  ExpandIconWrapper,
  ExpandIconContainer,
} from "./ExpandIcon.styled";

const ExpandIcon = ({ open }) => {
  return (
    <ExpandIconWrapper>
      <ExpandIconContainer open={open} />
    </ExpandIconWrapper>
  );
};

export default ExpandIcon;
