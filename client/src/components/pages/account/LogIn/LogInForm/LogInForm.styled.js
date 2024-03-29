import styled from "styled-components";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xl, l, m } = viewport_sizes;

export const LogInFormWrapper = styled.div`
  padding: 50px 50px 50px 0;

  @media (max-width: ${xl}px) {
    padding: 20px 20px 20px 0;
  }

  @media (max-width: ${l}px) {
    margin-bottom: 50px;
    padding: 0;
    width: 100%;
  }

  @media (max-width: ${m}px) {
    padding: 20px 0;
  }
`;

export const LogInButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
