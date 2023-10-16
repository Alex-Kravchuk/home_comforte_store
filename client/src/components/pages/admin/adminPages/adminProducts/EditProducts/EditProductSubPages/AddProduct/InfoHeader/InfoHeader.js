import React from "react";

import { Tooltip } from "antd";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { InfoHeaderContainer } from "./InfoHeader.styled";

const InfoHeader = ({ tooltipText }) => {
 
  return (
    <InfoHeaderContainer>
      <Tooltip title={tooltipText} placement="topRight">
        <InfoOutlinedIcon />
      </Tooltip>
    </InfoHeaderContainer>
  );
};

export default InfoHeader;
