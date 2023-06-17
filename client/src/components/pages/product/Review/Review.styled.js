import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../helpers/getResponsiveFontSize";

import { viewport_sizes } from "../../../../utils/viewport_size_consts";
const { l, ml } = viewport_sizes;

export const ReviewWrapper = styled.div`
  margin-bottom: 50px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0px 4px 4px -6px #111;
  font-size: ${getResponsiveFontSize(17, 15)};

  &:last-child {
    margin: 0;
    border: none;
    box-shadow: none;
  }
`;
export const ReviewContainer = styled.div``;

export const ReviewProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${l}px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ReviewImgNameContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;

  @media (max-width: ${l}px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ReviewProductName = styled.div`
  font-weight: 500;
`;
export const ReviewImg = styled.img`
  width: 200px;
  height: auto;

  @media (max-width: ${l}px) {
    width: 160px;
  }

  @media (max-width: ${ml}px) {
    width: 140px;
  }
`;
export const ReviewRating = styled.div``;

export const ReviewBodyWrapper = styled.div``;
export const ReviewDate = styled.div`
  font-weight: 500;
  padding: 15px 0;
`;
export const ReviewText = styled.div`
  position: relative;
`;
export const ReviewTextParagraph = styled.p`
  margin: 10px 0;
  text-align: justify;
`;

export const ReviewReadMoreButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #8080805c;
  border-radius: 5px;
  background: #fff;
  color: gray;
  padding: 2px;
`;

export const ReviewImages = styled.div`
  padding: 10px 0 0 0;
  img {
    margin-right: 15px;
  }
`;
