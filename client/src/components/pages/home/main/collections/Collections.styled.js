import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

export const CollectionsWrapper = styled.div``;

export const CollectionTitleContainer = styled.div`
  margin: 50px 0 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555759;
`;
export const TitleContainer = styled.div`
  font-size: ${getResponsiveFontSize(30, 22)};
`;
export const FetchButtonContainer = styled.div`
  text-align: center;
  display: inline-block;
  cursor: pointer;
  font-size: ${getResponsiveFontSize(18, 16)};
  color: #fff;
  background: #b3a08e;
  padding: 15px 25px;
  border-radius: 15px;
  transition: all 0.2s ease;
  margin-top: ${({ bottomPosition }) => (bottomPosition ? "15px" : "0")};

  &:hover {
    background: #d3c6b7;
  }
`;
