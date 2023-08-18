import styled, { css } from "styled-components";

export const LabelWraper = styled.div``;
export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LabelName = styled.div`
  display: flex;
  align-items: center;
`;
export const LabelButtonGroupe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button:last-child {
    margin-left: 12px;
  }
`;

export const LabelEditInputWrapper = styled.div`
  width: 350px;
  display: flex;
  position: relative;
  visibility: hidden;
  opacity: 0;
  left: 0;
  transition: all 0.3s ease;

  button {
    margin: 0 !important;
  }

  ${({ edit }) =>
    edit &&
    css`
      visibility: visible;
      opacity: 1;
      left: -100px;
    `};
`;
