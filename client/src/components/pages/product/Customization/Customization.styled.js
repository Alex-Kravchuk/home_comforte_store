import styled from "styled-components";

import { sizes } from "../../../../utils/css_size_consts";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

export const CustomizationWrapper = styled.div`
  position: sticky;
  top: 50px;

  background: rgba(0, 0, 0, 0.04);
  padding: 30px 60px 60px 60px;
  box-sizing: border-box;
  flex: 0 1 500px;

  box-shadow: 0px -100px 0px 0px rgba(0, 0, 0, 0.04);

  @media (max-width: 1024px) {
    flex: 0 1 100%;
    position: static;
    box-shadow: unset;
  }

  @media (max-width: ${xl}px) {
    // width: ${sizes.l.contentContainerWidth}%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
`;
export const CustomizationContainer = styled.div``;
