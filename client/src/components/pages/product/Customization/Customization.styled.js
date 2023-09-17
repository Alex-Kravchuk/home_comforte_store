import styled from "styled-components";

import { sizes } from "../../../../utils/css_size_consts";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { l } = viewport_sizes;

export const CustomizationWrapper = styled.div`
  background: rgba(0, 0, 0, 0.04);
  // padding: 60px;
  // box-sizing: border-box;
  flex: 0 1 500px;

  @media (max-width: 1024px) {
    flex: 0 1 100%;
  }

  @media (max-width: ${l}px) {
    width: ${sizes.l.contentContainerWidth}%;
    margin: 0 auto;
  }
`;
export const CustomizationContainer = styled.div``;
