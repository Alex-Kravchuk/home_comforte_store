import styled from "styled-components";

import { sizes } from "../../../../utils/css_size_consts";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { l } = viewport_sizes;

export const ReviewsWrapper = styled.div`
  background: lightblue;

  @media (max-width: ${l}px) {
    width: ${sizes.l.contentContainerWidth}%;
    margin: 0 auto;
  }
`;
export const ReviewsContainer = styled.div``;
