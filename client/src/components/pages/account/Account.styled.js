import styled from "styled-components";
import { viewport_sizes } from "../../../utils/viewport_size_consts";
import { Button, Input } from "antd";
import { textColors } from "../../../styles/globalStyles";
import { getResponsiveFontSize } from "../../../helpers/getResponsiveFontSize";

const { m, s } = viewport_sizes;

export const AccountPageWrapper = styled.div`
  position: relative;
  min-height: 400px;

  .ant-btn-primary {
    background-color: #acb39b;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
  }

  .ant-btn-primary:hover {
    background-color: #8e9482;
  }

  @media (max-width: ${s}px) {
    .ant-btn-primary {
      padding: 25px;
      font-size: 16px;
    }
  }
`;

// common forms components

export const FormWrapper = styled.div``;
export const FormContainer = styled.div``;

export const FormTitle = styled.div`
  border-bottom: 1px solid lightgray;
  font-size: ${getResponsiveFontSize(24, 18)};
  padding: 0 0 20px 0;
  margin-bottom: 30px;

  @media (max-width: ${s}px) {
    padding: 0 0 15px 0;
    margin-bottom: 25px;
  }
`;

export const FormSubTitle = styled.div`
  margin-bottom: 30px;
`;

export const FormInput = styled(Input)`
  height: 50px;
  font-size: 16px;
  color: ${textColors.main};

  @media (max-width: ${s}px) {
    height: 45px;
  }
`;
export const FormPasswordInput = styled(Input.Password)`
  height: 50px;
`;

export const FormLabel = styled.div`
  font-size: 16px;
  color: ${textColors.plain};

  @media (max-width: ${m}px) {
    font-size: 14px;
  }
`;

export const FromSubmitButton = styled(Button)`
  width: 130px;
  margin-top: 10px;
`;
