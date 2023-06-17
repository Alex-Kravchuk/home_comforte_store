import styled from "styled-components";

export const OrderWrapper = styled.div`
  margin-top: 20px;
`;
export const OrderContainer = styled.div``;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderCloseBtn = styled.div`
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #000000;
  }
`;
export const OrderInfo = styled.div``;

// order product list
export const OrderProductList = styled.div``;

// OP = OrderProduct
export const OPContainer = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  margin-bottom: 5px;
  box-shadow: 0px 4px 4px -6px #111;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const OPImgNameContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const OPBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex: 1 1 55%;
`;
export const OPPriceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 45%;

  @media (max-width: 768px) {
    justify-content: end;
  }
`;

export const OPImage = styled.img`
  width: 140px;
  height: 100px;

  @media (max-width: 768px) {
    width: 120px;
    height: 80px;
  }
`;
export const OPName = styled.div``;
export const OPNumber = styled.div`
  font-weight: 900;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;
export const OPPricePerUnit = styled.div`
  @media (max-width: 768px) {
    margin-left: 15px;
  }
`;
export const OPTotalPrice = styled.div`
  font-weight: 900;
  @media (max-width: 768px) {
    margin-left: 15px;
  }
`;

// other order info
export const OrderAdditionalInfo = styled.div`
  margin-top: 30px;
  font-size: 16px;

  div:last-child {
    margin: 0;
  }
`;

// OAI = OrderAdditionalInfo

export const OAIFooter = styled.div`
  display: flex;
  justify-content: end;
  color: #000000;
  margin-top: 30px;
  font-size: 18px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0px 4px 4px -6px #111;
  padding: 10px 0;
`;
export const OAIBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;

  .ant-tag {
    margin: 0;
  }
`;
export const OAILabel = styled.div`
  margin-right: 50px;
`;
export const OAIValue = styled.div`
  font-weight: 700;
  text-align: right;
`;

export const OAITotalPrice = styled.div``;
export const OAICancelOrder = styled.div``;

export const OAIBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
`;
export const OAICancelOrderBtn = styled.div``;
