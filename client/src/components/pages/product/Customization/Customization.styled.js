import styled from "styled-components";

import { sizes } from "../../../../utils/css_size_consts";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { xxl, xl } = viewport_sizes;

export const CustomizationWrapper = styled.div`
  position: sticky;
  top: 50px;

  background: rgba(0, 0, 0, 0.04);
  padding: 30px 40px 40px 40px;
  box-sizing: border-box;
  flex: 0 0 500px;
  margin-left: 25px;

  box-shadow: 0px -100px 0px 0px rgba(0, 0, 0, 0.04);

  @media (max-width: ${xxl}px) {
    // flex: 0 0 450px;
  }

  @media (max-width: ${xl}px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 40px 0;
    flex: 0 1 100%;
    position: static;
    box-shadow: unset;
  }
`;
export const CustomizationContainer = styled.div``;
