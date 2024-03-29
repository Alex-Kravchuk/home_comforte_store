import styled from "styled-components";
import { textColors } from "../../../../../../../../styles/globalStyles";
import { viewport_sizes } from "../../../../../../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

// PF = PaymentForm

export const PFBlock = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;

  &:last-child {
    margin-top: 30px;
    border: none;
  }

  @media (max-width: ${xl}px) {
    flex-direction: column;
  }
`;

export const PFFormItemGroupe = styled.div`
  flex: 1 1 auto;

  @media (max-width: ${xl}px) {
    flex: unset;
    width: 100%;
  }
`;

export const PFItemContainer = styled.div`
  &:last-child {
    margin-top: 30px;
  }
`;

export const PFCheckboxLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
export const PFCheckboxInfo = styled.div`
  padding-left: 25px;
  box-sizing: border-box;
  word-break: break-word;
  color: ${textColors.plain};
  font-weight: 500;
  font-size: 16px;

  input {
    margin: 5px 0 20px 0;
  }
`;

export const PFTitleBlock = styled.div`
  margin-bottom: 30px;
  flex: 0 0 35%;

  @media (max-width: ${xl}px) {
    flex: unset;
    width: 100%;
  }
`;

export const PFTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
`;
export const PFSubTitle = styled.div`
  color: ${textColors.plain};
  font-weight: 500;
  font-size: 16px;
`;

export const PFCardList = styled.div``;
