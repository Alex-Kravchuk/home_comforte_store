import styled from "@emotion/styled";

export const HintWrapper = styled.div``;
export const HintContaiter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 10px 0;
`;
export const ErrorHint = styled.div`
  transition: all 0.2s ease;
  color: ${({ condition }) => (condition ? "red" : "rgba(0, 0, 0, 0)")};
`;
export const InfoHint = styled.div`
  font-weight: 500;
`;
