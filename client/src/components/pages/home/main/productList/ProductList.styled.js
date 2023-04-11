import styled from "styled-components";

import { viewport_sizes } from "../../../../../utils/viewport_size_consts";
import { marginConsts, swiperStyles } from "../../../../../styles/globalStyles";

const { xl, xs } = viewport_sizes;

export const ProductListWrapper = styled.div`
  ${swiperStyles}

  ${marginConsts}
`;
export const ProductListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const ProductListItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  min-width: 80px;
  background: #f8f8f8;
  margin: 0 5px;
  padding: 25px;

  @media (max-width: ${xl}px) {
    height: 120px;
  }


  &:hover {
    img {
      transform: scale(1.15);
    }
  }
`;

export const ProductListItemTitle = styled.span`
  font-size: 18px;
`;
export const ProductListItemImageContainer = styled.div`
  min-height: 50%;
`;
export const ProductListItemImage = styled.img`
  transition: all 0.2s ease;
`;
