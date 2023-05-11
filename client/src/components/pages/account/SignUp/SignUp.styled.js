import styled from "styled-components";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { xl, l, m } = viewport_sizes;

export const SignUpWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0;

  @media (max-width: ${m}px) {
    margin: 50px 0;
  }
`;
export const SignUpContainer = styled.div`
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
