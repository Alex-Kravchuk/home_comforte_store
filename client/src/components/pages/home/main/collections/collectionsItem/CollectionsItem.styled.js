import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

export const CollectionsItemWrapper = styled.div`
  cursor: pointer;
  width: 80vw;
  max-width: 420px;
  color: #555759;

  &:hover {
    svg {
      left: 15px;
    }
  }
`;
export const CollectionsItemContainer = styled.div``;
export const CollectionsItemImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CollectionsItemTitleContainer = styled.div`
  padding: 10px 10px 10px 0;
  display: inline-block;
  font-size: ${getResponsiveFontSize(32, 24)};

  svg {
    font-size: ${getResponsiveFontSize(32, 24)};
  }
`;
export const CollectionsItemTitleName = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;
`;
export const CollectionsItemTitleArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 120%;
  transform: translate(0, -50%);

  svg {
    transition: all 0.2s ease;
    position: relative;
    left: 10px;
  }
`;
export const CollectionsItemDescription = styled.div``;
