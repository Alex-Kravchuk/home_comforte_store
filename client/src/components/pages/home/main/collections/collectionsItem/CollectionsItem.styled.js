import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

export const CollectionsItemWrapper = styled.div`
  cursor: pointer;

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
  position: relative;
  padding: 10px 10px 10px 0;
  display: inline-block;
  font-size: ${getResponsiveFontSize(24, 22)};

  svg {
    font-size: ${getResponsiveFontSize(24, 22)};
  }
`;

export const NameContainer = styled.div``;
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
export const CollectionsItemDescription = styled.div`
  font-size: ${getResponsiveFontSize(16, 14)};
`;
