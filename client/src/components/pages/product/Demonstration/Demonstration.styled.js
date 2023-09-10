import styled from "styled-components";
import { viewport_sizes } from "../../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

export const DemonstrationWrapper = styled.div`
  flex: 1 1 70%;
  
  @media (max-width: ${xl}px) {
    margin-bottom: 30px;
  }
`;
export const DemonstrationContainer = styled.div``;
