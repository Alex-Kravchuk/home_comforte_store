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

export const InfoBlock = styled.div``;
export const InfoBlockTitle = styled.div`
  text-align: end;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.45);

  border-bottom: 1px solid lightgray;
  padding: 10px;
  margin-bottom: 10px;
`;

export const TabWrapper = styled.div`
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0 0 6px 6px;
  padding: 24px;
`;

export const TabLabel = styled.div`
  display: flex;
  align-items: center;
`;
export const TabLabelText = styled.div`
  margin-left: 5px;
`;

export const CreateButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
`;

export const CreateConfirmContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ErrorText = styled.div`
  color: red;
  font-size: 18px;
  font-weight: 600;
`;

export const ConfirmedFlag = styled.div`
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
  font-size: 18px;
  font-weight: 600;

  color: ${({ wasConfirmed }) => (wasConfirmed ? "green" : "inherit")};
`;
