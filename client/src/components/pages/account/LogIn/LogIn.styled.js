import styled from "styled-components";

import { Input } from "antd";

import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { l } = viewport_sizes;

export const LogInWrapper = styled.div`
  padding: 70px 0;


  @media (max-width: ${l}px) {
    padding: 50px 0;
  }
`;
export const LogInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  @media (max-width: ${l}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LogInFormInput = styled(Input)`
  height: 50px;
`;
