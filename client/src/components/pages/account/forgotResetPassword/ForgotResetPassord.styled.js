import styled from "styled-components";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { xl, l, m } = viewport_sizes;

// FRP = ForgotResetPassword

export const FRPWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0;

  .ant-result {
    padding: 0 32px;
  }

  @media (max-width: ${m}px) {
    display: block;
    margin: 50px 0;
  }
`;
export const FRPContainer = styled.div`
  width: 550px;

  @media (max-width: ${xl}px) {
    width: 450px;
  }

  @media (max-width: ${l}px) {
    width: 80%;
  }

  @media (max-width: ${m}px) {
    width: auto;
  }
`;

// SFS = SuccessfullySending

export const SFSButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
