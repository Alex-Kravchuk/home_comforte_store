import styled from "styled-components";
import { viewport_sizes } from "../../../../../../../../../../utils/viewport_size_consts";

// ANCF = AddNewCardForm

const { s, m } = viewport_sizes;

export const ANCFWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;

  // Hide Arrows From Input Number
  // Chrome, Safari, Edge, Opera
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .ant-btn.ant-btn-lg {
    padding: 15px 40px;
    height: auto;
    width: 100%;
  }

  .ant-btn-lg:hover {
    background-color: #6b7887;
  }

  .ant-btn-primary {
    background-color: #819dbd;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
  }

  @media (max-width: ${s}px) {
    .ant-btn-primary {
      padding: 25px;
      font-size: 16px;
    }
  }

  @media (max-width: ${m}px) {
    .ant-btn.ant-btn-lg {
      padding: 12px 30px;
      height: auto;
    }
  }
`;
export const ANCFContainer = styled.div``;

// This need for avoidance ANT design error about "one child in Form.Item"
export const ANCFTwoItemsContainer = styled.div``;

export const ANCFCardContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ANCFCardIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
`;
export const ANCFCardIcon = styled.img`
  width: 60px;
  height: auto;
`;
