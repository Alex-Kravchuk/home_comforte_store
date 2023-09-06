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
