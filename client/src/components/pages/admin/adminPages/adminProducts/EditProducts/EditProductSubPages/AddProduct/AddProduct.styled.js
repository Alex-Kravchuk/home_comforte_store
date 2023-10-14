import styled from "styled-components";

export const AddProductContent = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;
export const AddProductFormContainer = styled.div`
  height: auto;
  flex: 1 1 50%;

  &:first-child {
    margin-right: 25px;
  }

  &:last-child {
    margin-left: 25px;
  }
`;

export const AddProductFormBlock = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 30px;
`;

export const AddProductFormBlockTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
`;

export const InfoBlock = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 4px -6px #111;

  &:nth-child(2n) {
    padding: 24px 0;
  }

  &:last-child {
    border-bottom: none;
    box-shadow: none;
  }
`;
export const InfoBlockTitle = styled.div`
  text-align: end;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.45);
`;