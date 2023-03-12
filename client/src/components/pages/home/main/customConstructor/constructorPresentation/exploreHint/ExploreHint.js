import React from "react";
import { ExploreTipArrow, ExploreTipContainer, ExploreTipText } from "./ExploreHint.styled";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const ExploreHint = () => {
  return (
    <ExploreTipContainer>
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
