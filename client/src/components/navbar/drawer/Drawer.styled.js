import styled, { css } from "styled-components";
import { viewport_sizes } from "../../../utils/viewport_size_consts";

const { ml, xs } = viewport_sizes;

export const DrawerContainer = styled.div`
  display: ${({ smallScreen }) => (smallScreen ? "flex" : "none")};
  justify-content: start;

  @media (max-width: 1024px) {
    flex: 1 1 20%;
  }
`;

export const DrawerIconContainer = styled.div`
  @media (min-width: ${ml}px) {
    margin-left: 20px;
  }

  @media (max-width: ${ml}px) {
    ${({ leftSideIcon }) =>
      !leftSideIcon &&
      css`
        margin-left: 20px;

        @media (max-width: ${xs}px) {
          margin-left: 10px;
        }
      `}
  }
`;
