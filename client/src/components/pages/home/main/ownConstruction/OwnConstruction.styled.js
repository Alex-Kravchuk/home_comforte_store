import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

export const OwnConstructionWrapper = styled.div`
  width: 100%;
  background: rgba(215, 215, 196, 0.8);
  margin: 30px 0;
  padding-bottom: 50px;

  @media (max-width: 425px) {
    padding-bottom: 25px;
  }
`;
export const OwnConstructionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ConstructionTitle = styled.div`
  color: #555759;
  text-align: center;
  padding: 50px 0;
  font-size: ${getResponsiveFontSize(30, 22)};

  @media (max-width: 768px) {
    padding: 25px;
  }
`;
