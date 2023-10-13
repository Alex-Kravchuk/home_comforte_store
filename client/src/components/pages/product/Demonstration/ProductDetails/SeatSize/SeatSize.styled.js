import styled from "styled-components";
import { textColors } from "../../../../../../styles/globalStyles";

export const SeatSizeWrapper = styled.div``;
export const SeatSizeContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SeatSizeInfoBlock = styled.div`
  display: flex;
  align-items: strech;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

export const SeatSizeInfoBlockLeft = styled.div`
  width: 50%;
  padding: 10px 0;

  input:last-child {
    margin-top: 5px;
  }
`;

export const SeatSizeInfoBlockRight = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.65);
  padding: 10px 0;

  width: 50%;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SeatSizeInfoLabel = styled.div`
  margin: 0 20px;
  color: #000;
`;
export const SeatSizeInfoDetails = styled.div`
  margin: 0 20px;
  color: ${textColors.plain};
`;
export const SeatSizeInfoValue = styled.div`
  margin: 0 20px;
`;
