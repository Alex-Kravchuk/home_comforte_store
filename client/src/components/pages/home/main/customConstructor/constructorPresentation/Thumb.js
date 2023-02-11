import React from "react";
import {
  CPArrow,
  CPThumbWrapper,
  ThumbInput,
} from "./ConstructorPresentation.styled";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Thumb = ({ onChnageHandler, shift }) => {
  return (
    <CPThumbWrapper>
      <ThumbInput type="range" min="0" max="100" onChange={onChnageHandler} />
      <CPArrow shift={shift}>
        <ArrowBackIosNewOutlinedIcon />
        <ArrowForwardIosOutlinedIcon />
      </CPArrow>
    </CPThumbWrapper>
  );
};

export default Thumb;
