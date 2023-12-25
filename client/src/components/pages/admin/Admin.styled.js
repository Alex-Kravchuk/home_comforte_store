import styled from "styled-components";
import { textColors } from "../../../styles/globalStyles";
import { viewport_sizes } from "../../../utils/viewport_size_consts";
import { getResponsiveFontSize } from "../../../helpers/getResponsiveFontSize";

const { xxl, xl } = viewport_sizes;

export const AdminPageWrapper = styled.div``;
export const AdminPageContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${xxl}px) {
    flex-direction: column;
  }
`;
export const AdminSubPageContainer = styled.div`
  flex: 1 1 85%;
  padding: 0 0 0 30px;

  @media (max-width: ${xxl}px) {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
  }
`;

export const AdminPagesTitle = styled.div`
  font-size: ${getResponsiveFontSize(24, 18)};
  font-weight: 900;
`;

export const AdminPagesSubTitle = styled.div`
  margin: 25px 0;
  width: 80%;
  color: ${textColors.plain};
  text-align: justify;

  @media (max-width: ${xxl}px) {
    width: 100%;
    margin: 15px 0;
  }
`;
