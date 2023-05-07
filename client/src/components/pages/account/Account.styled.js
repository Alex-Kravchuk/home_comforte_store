import styled from "styled-components";
import { viewport_sizes } from "../../../utils/viewport_size_consts";

const { m } = viewport_sizes;

export const AccountPageWrapper = styled.div``;
export const AccountPageContainer = styled.div``;

export const FormsTitle = styled.div`
  border-bottom: 1px solid lightgray;
  font-size: 24px;
  padding: 0 0 20px 0;
  margin-bottom: 30px;
`;

export const FormsSubTitle = styled.div`
  margin-bottom: 30px;

  @media (max-width: ${m}px) {
    margin-bottom: 15px;
  }
`;
