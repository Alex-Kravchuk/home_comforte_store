import styled from "styled-components";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xl, l } = viewport_sizes;

export const LogInFormWrapper = styled.div`
  padding: 50px;

  @media (max-width: ${xl}px) {
    padding: 20px;
  }

  @media (max-width: ${l}px) {
    margin-bottom: 50px;
  }
`;
