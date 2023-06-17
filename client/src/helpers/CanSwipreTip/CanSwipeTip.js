import React, { useState } from "react";
import {
  CanSwipeTipIconContainer,
  CanSwipeTipWrapper,
} from "./CanSwipeTip.styled";

import SwipeLeftOutlinedIcon from "@mui/icons-material/SwipeLeftOutlined";

const CanSwipeTip = () => {
  const [touch, setTouch] = useState(false);

  const touchHandler = () => {
    setTouch(true);
  };
  return (
    <CanSwipeTipWrapper touch={touch} onTouchStart={touchHandler}>
      <CanSwipeTipIconContainer>
        <SwipeLeftOutlinedIcon />
      </CanSwipeTipIconContainer>
    </CanSwipeTipWrapper>
  );
};

export default CanSwipeTip;
