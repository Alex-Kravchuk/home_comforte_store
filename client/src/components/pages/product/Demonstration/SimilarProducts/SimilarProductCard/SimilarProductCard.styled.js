import styled from "styled-components";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";

// SPC = SimilarProductCard

const { m } = viewport_sizes;

export const SPCWrapper = styled.div`
  padding: 20px 0;

  @media (max-width: ${m}px) {
    padding-bottom: 15px;
  }
`;
export const SPCContainer = styled.div``;

export const SPCImageContainer = styled.div``;
export const SPCImage = styled.img`
  width: 100%;
  height: auto;
`;

export const SPCName = styled.div`
  color: rgba(0, 0, 0, 0.8);
  padding: 10px 0;
`;

export const SPCPrice = styled.div``;
export const SPCcustomSuggestions = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;
