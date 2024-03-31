import styled from "styled-components";

import { getResponsiveFontSize } from "../../../helpers/getResponsiveFontSize";
import { viewport_sizes } from "../../../utils/viewport_size_consts";

const { ml } = viewport_sizes;

export const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllContainer = styled.div``;

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PageTitle = styled.div`
  text-align: center;
  font-size: ${getResponsiveFontSize(36, 28)};
  margin: 15px 0;
`;

export const PageSubtitle = styled.div`
  width: 70%;
  text-align: center;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: ${ml}px) {
    width: 100%;
  }
`;

export const CategoriesList = styled.div`
  padding: 25px 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
`;

export const CategoryCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 10px;

  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    transition: all 0.2s ease;
    position: relative;
    font-size: 32px;
    left: 0px;
  }

  &:hover {
    svg {
      position: relative;
      left: 5px;
    }
  }
`;

export const CategoryName = styled.div`
  display: flex;
  font-size: ${getResponsiveFontSize(22, 18)};
  margin-top: 10px;

  div:first-child {
    line-height: 28px;
  }
`;

export const CategoryImg = styled.img`
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    max-width: unset;
  }
`;
