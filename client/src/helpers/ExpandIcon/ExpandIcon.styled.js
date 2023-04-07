import styled, { css } from "styled-components";

import { textColors } from "../../styles/globalStyles";

export const ExpandIconWrapper = styled.div``;
export const ExpandIconContainer = styled.div`
  position: relative;
  width: 100%;

  &:after {
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    height: 2px;
    width: 15px;
    display: block;
    background-color: ${textColors.main};
  }

  &:before {
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 2px;
    height: 15px;
    display: block;
    background-color: ${textColors.main};
  }

  ${({ open }) =>
    open
      ? css`
          &:before {
            transform: translate(-50%, -50%) rotate(-270deg);
          }

          &:after {
            transform: translate(-50%, -50%) rotate(-180deg);
          }
        `
      : css`
          &:after {
            transform: translate(-50%, -50%);
          }

          &:before {
            transform: translate(-50%, -50%);
          }
        `}
`;
