import styled from "styled-components";
import { textColors } from "../../../styles/globalStyles";

export const AdminPageWrapper = styled.div``;
export const AdminPageContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;
export const AdminSubPageContainer = styled.div`
  flex: 1 1 85%;
  padding: 0 0 0 30px;
`;

export const AdminPagesTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

export const AdminPagesSubTitle = styled.div`
  margin: 25px 0;
  width: 70%;
  color: ${textColors.plain};
`;
