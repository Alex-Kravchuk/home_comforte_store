import styled from "styled-components";

import { Button, Input } from "antd";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { xl, l } = viewport_sizes;

export const LogInWrapper = styled.div`
  padding: 100px 0;

  @media (max-width: ${l}px) {
    padding: 50px 0 0 0;
  }
`;
export const LogInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

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

  @media (max-width: ${l}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LogInFormInput = styled(Input)`
  height: 50px;
`;

export const LogInButton = styled(Button)`
  width: 130px;
`;


export const ForgotPassLink = styled.div``;


