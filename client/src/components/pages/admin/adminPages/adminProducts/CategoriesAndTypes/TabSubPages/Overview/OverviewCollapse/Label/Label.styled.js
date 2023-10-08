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

  @media (max-width: 1024px) {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 12px;
    }
    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 760px) {
    visibility: hidden;
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

      @media (max-width: 1024px) {
        left: -50px;
      }
    `};

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
