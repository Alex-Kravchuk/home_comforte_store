import styled from "styled-components";

export const GeneralInfoWrapper = styled.div`
  .ant-select-single.ant-select-lg {
    height: 100%;
  }
  .ant-input-number-input-wrap {
    height: 100%;
  }
  .ant-input-number .ant-input-number-input {
    height: 100%;
  }
`;
export const GeneralInfoContainer = styled.div``;

export const InfoBlock = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 4px -6px #111;

  &:nth-child(2n) {
    padding: 24px 0;
  }
`;
export const InfoBlockTitle = styled.div`
  margin-bottom: 15px;
  text-align: end;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.45);
`;
