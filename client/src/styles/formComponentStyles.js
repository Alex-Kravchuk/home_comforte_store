import styled from "styled-components";
import { viewport_sizes } from "../utils/viewport_size_consts";
import { textColors } from "./globalStyles";
import { getResponsiveFontSize } from "../helpers/getResponsiveFontSize";
import { Button, Input } from "antd";

const { xl, l, m, s } = viewport_sizes;

export const FormComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0;

  @media (max-width: ${m}px) {
    display: block;
    margin: 50px 0;
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

export const FromSubmitButton = styled(Button)`
  margin-top: 10px;
`;
