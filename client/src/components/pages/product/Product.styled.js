import styled from "styled-components";
import { viewport_sizes } from "../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

export const ProductWrapper = styled.div``;
export const ProductContainer = styled.div``;
export const ProudctInfoSection = styled.div`
  display: flex;
  align-items: scratch;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: ${xl}px) {
    flex-direction: column;
  }
`;
