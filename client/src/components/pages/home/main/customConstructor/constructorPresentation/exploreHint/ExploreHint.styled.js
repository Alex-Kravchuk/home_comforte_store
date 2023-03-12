import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../../../helpers/getResponsiveFontSize";

export const ExploreTipContainer = styled.div`
  width: auto;
  font-size: ${getResponsiveFontSize(18, 14)};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, 0);
  background: rgba(0, 0, 0, 0.65);
  border-radius: 5px;
  padding: 15px 10px;

  @media (max-width: 760px) {
    padding: 10px 10px;
    bottom: 40%;
  }

  @media (max-width: 425px) {
    padding: 10px 5px;
  }

  @media (max-width: 320px) {
    padding: 10px 5px;
  }
`;
export const ExploreTipText = styled.div`
  white-space: nowrap;
  padding: 0 15px;
  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;
export const ExploreTipArrow = styled.div`
  svg {
    font-size: ${getResponsiveFontSize(18, 14)};
    margin-top: 5px;
  }

  @media (max-width: 320px) {
    svg {
      margin-top: 5px;
    }
  }
`;
