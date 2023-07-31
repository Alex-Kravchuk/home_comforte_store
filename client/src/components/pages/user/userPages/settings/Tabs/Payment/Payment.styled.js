import styled from "styled-components";
import { viewport_sizes } from "../../../../../../../utils/viewport_size_consts";

const { xl, l, m } = viewport_sizes;

export const PaymentWrapper = styled.div``;
export const PaymentFormContainer = styled.div`
  width: 850px;

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
