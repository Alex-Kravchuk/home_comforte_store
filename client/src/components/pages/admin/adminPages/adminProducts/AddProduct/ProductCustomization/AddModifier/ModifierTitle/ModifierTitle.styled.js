import styled from "styled-components";

export const ModifierTitleWrapper = styled.div``;

export const ModifierTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div:last-child {
    color: rgba(0, 0, 0, 0.55);
  }
`;

export const ModifierTitleLeftContainer = styled.div`
  display: flex;
`;

export const TitlePart = styled.div`
  svg {
    transition: all 0.2s ease;
  }

  &:hover {
    svg {
      color: rgba(0, 0, 0, 1);
    }
  }
`;

export const TitlePartGroupe = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;

export const CheckboxContainer = styled.div`
  margin-left: 100px;

  span {
    margin-right: 20px;
  }
`;
