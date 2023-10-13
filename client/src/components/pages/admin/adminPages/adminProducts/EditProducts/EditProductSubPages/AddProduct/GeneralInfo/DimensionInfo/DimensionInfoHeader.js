import React from "react";

import { Popconfirm, Tooltip } from "antd";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

import { DITooltipContainer } from "./DimensionInfo.styled";

const DimensionInfoHeader = ({ aboutImgInfo = false }) => {
  const tooltipText = aboutImgInfo
    ? "Here you must upload the image in the following format: the image must be shown in profile and front with as many dimensions as possible (eg width, seat depth, height from the floor, etc.). This will help the client better understand how exactly a certain product works."
    : "Here you can add information about the dimensions of the product. This will look like a name-value pair. You can also add a description to each label";
  return (
    <DITooltipContainer>
      <Tooltip title={tooltipText} placement="topRight">
        <InfoOutlinedIcon />
      </Tooltip>
    </DITooltipContainer>
  );
};

export default DimensionInfoHeader;
