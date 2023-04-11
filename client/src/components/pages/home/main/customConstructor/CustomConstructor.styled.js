import styled from "styled-components";

import { marginConsts } from "../../../../../styles/globalStyles";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

export const CustomConstructorWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #f9faf7;

  ${marginConsts}
`;

export const CustomConstructorContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${xl}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
`;
