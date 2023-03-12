import React from "react";

import {
  CPArrow,
  ThumbInput,
  CPThumbWrapper,
} from "./Thumb.styled";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Thumb = ({ onChnageHandler, shift }) => {
  return (
    <CPThumbWrapper>
      <ThumbInput
        type="range"
        min="0"
        max="100"
        onChange={onChnageHandler}
        value={shift}
      />
      <CPArrow shift={shift}>
        <ArrowBackIosNewOutlinedIcon />
        <ArrowForwardIosOutlinedIcon />
      </CPArrow>
    </CPThumbWrapper>
  );
};

export default Thumb;
