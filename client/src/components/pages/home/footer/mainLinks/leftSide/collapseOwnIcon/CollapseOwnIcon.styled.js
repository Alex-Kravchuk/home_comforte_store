import styled, { css } from "styled-components";

export const CollapseOwnIconWrapper = styled.div``;
export const CollapseOwnIconContainer = styled.div`
  position: relative;
  width: 100%;

  &:after {
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    background: black;
    height: 2px;
    width: 15px;
    display: block;
    background-color: rgba(0, 0, 0, 0.88);
  }

  &:before {
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    background: black;
    width: 2px;
    height: 15px;
    display: block;
    background-color: rgba(0, 0, 0, 0.88);
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
