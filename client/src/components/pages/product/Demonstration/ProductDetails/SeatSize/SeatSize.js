import React from "react";
import {
  SeatSizeContainer,
  SeatSizeInfoBlock,
  SeatSizeInfoBlockLeft,
  SeatSizeInfoBlockRight,
  SeatSizeInfoDetails,
  SeatSizeInfoLabel,
  SeatSizeInfoValue,
  SeatSizeWrapper,
} from "./SeatSize.styled";
import { Empty } from "antd";

const SeatSize = ({ info }) => {
  return (
    <SeatSizeWrapper>
      <SeatSizeContainer noData={Boolean(info)}>
        {info ? (
          info.map(({ label, details, value }, index) => (
            <SeatSizeInfoBlock key={index}>
              <SeatSizeInfoBlockLeft>
                <SeatSizeInfoLabel>{label}</SeatSizeInfoLabel>
                {details && (
                  <SeatSizeInfoDetails>({details})</SeatSizeInfoDetails>
                )}
              </SeatSizeInfoBlockLeft>
              <SeatSizeInfoBlockRight>
                <SeatSizeInfoValue>{value}</SeatSizeInfoValue>
              </SeatSizeInfoBlockRight>
            </SeatSizeInfoBlock>
          ))
        ) : (
          <Empty />
        )}
      </SeatSizeContainer>
    </SeatSizeWrapper>
  );
};

export default SeatSize;
