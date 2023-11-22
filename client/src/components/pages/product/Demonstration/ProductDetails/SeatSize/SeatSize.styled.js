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

  &:nth-last-child(2) {
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
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.65);
  padding: 10px 0;

  width: 50%;
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  svg {
    margin-right: 10px;
    cursor: pointer;
    color: ${({ saved }) => (saved ? "#60a360" : "rgba(0, 0, 0, 0.3))")};
    transition: all 0.2s ease;
  }

  svg:hover {
    color: ${({ saved }) => (saved ? "#84e684" : "rgba(0, 0, 0, 0.8)")};
  }

  svg:active {
    color: rgba(0, 0, 0, 1);
  }
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
