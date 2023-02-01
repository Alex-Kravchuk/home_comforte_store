import React from "react";
import {
  SideMenuHeaderContainer,
  SideMenuHeaderIcon,
} from "./SideMenuHeader.styled";

import CloseIcon from "@mui/icons-material/Close";


const SideMenuHeader = () => {
  return (
    <SideMenuHeaderContainer>
      <SideMenuHeaderIcon>
        <CloseIcon />
      </SideMenuHeaderIcon>
    </SideMenuHeaderContainer>
  );
};

export default SideMenuHeader;
