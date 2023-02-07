import styled, { css } from "styled-components";
import { viewport_sizes } from "../../../utils/vieport_size_consts";

const { ml, xs } = viewport_sizes;

export const UserInterfaceWrapper = styled.div`
  display: flex;
  justify-content: end;

  @media (max-width: 1024px) {
    flex: 1 1 20%;
  }
`;
export const UserInterfaceContainer = styled.div`
  display: flex;
`;
export const UserInterfaceIconContainer = styled.div`
  @media (min-width: ${ml}px) {
    margin-left: 20px;
  }

  @media (max-width: ${ml}px) {
    ${({ rightSideIcon }) =>
      !rightSideIcon &&
      css`
        margin-left: 20px;

        @media (max-width: ${xs}px) {
          margin-left: 10px;
        }
      `}
  }
`;
