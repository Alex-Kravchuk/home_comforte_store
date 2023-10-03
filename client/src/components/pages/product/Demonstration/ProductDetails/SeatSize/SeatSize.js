import React from "react";
import {
  SeatSizeContainer,
  SeatSizeHeader,
  SeatSizeInfo,
  SeatSizeInfoBlock,
  SeatSizeInfoBlockLeft,
  SeatSizeInfoBlockRight,
  SeatSizeInfoDetails,
  SeatSizeInfoLabel,
  SeatSizeInfoValue,
  SeatSizeWrapper,
} from "./SeatSize.styled";

const SeatSize = () => {
  return (
    <SeatSizeWrapper>
      <SeatSizeContainer>
        <SeatSizeInfoBlock>
          <SeatSizeInfoBlockLeft>
            <SeatSizeInfoLabel>Seat comfort</SeatSizeInfoLabel>
          </SeatSizeInfoBlockLeft>
          <SeatSizeInfoBlockRight>
            <SeatSizeInfoValue>Soft seat</SeatSizeInfoValue>
          </SeatSizeInfoBlockRight>
        </SeatSizeInfoBlock>

        <SeatSizeInfoBlock>
          <SeatSizeInfoBlockLeft>
            <SeatSizeInfoLabel>Seat height</SeatSizeInfoLabel>
            <SeatSizeInfoDetails>
              (floor to the highest point of the seat cushion)
            </SeatSizeInfoDetails>
          </SeatSizeInfoBlockLeft>
          <SeatSizeInfoBlockRight>
            <SeatSizeInfoValue>Medium height at 19”</SeatSizeInfoValue>
          </SeatSizeInfoBlockRight>
        </SeatSizeInfoBlock>

        <SeatSizeInfoBlock>
          <SeatSizeInfoBlockLeft>
            <SeatSizeInfoLabel>Seat depth</SeatSizeInfoLabel>
            <SeatSizeInfoDetails>
              (front edge of seat cushion to front of back cushion)
            </SeatSizeInfoDetails>
          </SeatSizeInfoBlockLeft>
          <SeatSizeInfoBlockRight>
            <SeatSizeInfoValue>Standard - 24” seat</SeatSizeInfoValue>
          </SeatSizeInfoBlockRight>
        </SeatSizeInfoBlock>
      </SeatSizeContainer>
    </SeatSizeWrapper>
  );
};

export default SeatSize;
