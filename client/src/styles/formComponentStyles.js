import styled from "styled-components";
import { viewport_sizes } from "../utils/viewport_size_consts";
import { textColors } from "./globalStyles";
import { getResponsiveFontSize } from "../helpers/getResponsiveFontSize";
import { Button, DatePicker, Form, Input, Select } from "antd";

const { xl, l, m, s } = viewport_sizes;

export const FormComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 35px 0;

  @media (max-width: ${m}px) {
    display: block;
    margin: 10px 0 35px 0;
  }
`;

export const FormContainer = styled.div`
  width: 550px;

  @media (max-width: ${xl}px) {
    width: 70%;
  }

  @media (max-width: ${l}px) {
    width: 80%;
  }

  @media (max-width: ${m}px) {
    width: auto;
  }
`;

export const FormWrapper = styled.div``;

export const FormLabel = styled.div`
  font-size: 16px;
  color: ${textColors.plain};

  @media (max-width: ${m}px) {
    font-size: 14px;
  }
`;

export const FormTitleGroup = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 0 0 20px 0;
  margin-bottom: 30px;

  @media (max-width: ${s}px) {
    padding: 0 0 15px 0;
  }
`;

export const FormTitle = styled.div`
  font-size: ${getResponsiveFontSize(24, 18)};

  @media (max-width: ${s}px) {
    padding: 0 0 15px 0;
  }
`;

export const FormSubTitle = styled.div`
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  height: 50px;
  font-size: 16px;
  color: ${textColors.main};

  @media (max-width: ${s}px) {
    height: 45px;
  }
`;

export const FormDatePicker = styled(DatePicker)`
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: ${textColors.main};

  @media (max-width: ${s}px) {
    height: 45px;
  }
`;
export const FormPasswordInput = styled(Input.Password)`
  height: 50px;

  @media (max-width: ${s}px) {
    height: 45px;
  }
`;

export const FormSelect = styled(Select)`
  // height: 50px;
  // font-size: 16px;
  // color: ${textColors.main};

  // @media (max-width: ${s}px) {
  //   height: 45px;
  // }
`;

export const FromSubmitButton = styled(Button)`
  margin-top: 10px;
`;

// I use thoose component for display two input or another Form.Item in one line
export const FormItemInOneLineLeft = styled(Form.Item)`
  display: inline-block;
  width: 50%;
`;
export const FormItemInOneLineRight = styled(Form.Item)`
  display: inline-block;
  margin-left: 8px;
  width: calc(50% - 8px);
`;

export const FormInputWithTipWrapper = styled.div``;

export const FormInputTip = styled.div`
  font-size: 14px;
  color: ${textColors.plain};
  margin-top: 10px;
`;
