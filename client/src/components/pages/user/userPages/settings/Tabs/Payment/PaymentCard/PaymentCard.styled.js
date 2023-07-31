import styled from "styled-components";

import { textColors } from "../../../../../../../../styles/globalStyles";

// PC = PaymentCard

export const PCWrapper = styled.div`
  width: 100%;
  border: 1px solid #b2c7dd;
  box-shadow: 0 0 3px 0.5px rgba(21, 21, 21, 0.1),
    0 1px 10px 0 rgba(21, 21, 21, 0.1);
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
export const PCContainer = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;

export const PCIconContainer = styled.div`
  flex: 0 0 auto;
`;
export const PCIcon = styled.img`
  width: 54px;
  height: auto;
  margin-right: 15px;
`;

export const PCInfoContainer = styled.div`
  flex: 1 1 100%;
`;

export const PCNumberContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PCNumber = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
export const PCCheckbox = styled.div``;
export const PCExpiry = styled.div`
  color: ${textColors.plain};
`;

export const PCButtonGroupe = styled.div`
  display: flex;
  margin-top: 15px;

  div:last-child {
    margin-left: 20px;
    color: #ff471a;
  }
`;
export const PCButton = styled.div`
  cursor: pointer;
  font-weight: 500;
  color: #0086b3;
`;
