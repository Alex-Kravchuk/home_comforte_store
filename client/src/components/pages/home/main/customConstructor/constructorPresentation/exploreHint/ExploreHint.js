import React from "react";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import {
  ExploreTipText,
  ExploreTipArrow,
  ExploreTipContainer,
} from "./ExploreHint.styled";

const ExploreHint = ({ hideHint }) => {
  return (
    <ExploreTipContainer active={hideHint}>
      <ExploreTipArrow>
        <WestIcon />
      </ExploreTipArrow>
      <ExploreTipText>Drag to explore</ExploreTipText>
      <ExploreTipArrow>
        <EastIcon />
      </ExploreTipArrow>
    </ExploreTipContainer>
  );
};

export default ExploreHint;
