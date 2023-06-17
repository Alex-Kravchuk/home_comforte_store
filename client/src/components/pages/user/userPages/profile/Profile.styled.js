import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const {xl} = viewport_sizes

export const ProfileWrapper = styled.div`
  margin-top: 25px;
  font-size: ${getResponsiveFontSize(17, 15)};
`;
export const ProfileContainer = styled.div``;

// upper part
// PGI = ProfileGlobalInfo
export const ProfileGlobalInfo = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${xl}px) {
    flex-direction: column;
  }
`;
export const PGIContacts = styled.div`
  height: auto;
  box-sizing: border-box;
  flex: 45%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const PGIOrders = styled.div`
  height: auto;

  flex: 55%;
  margin-left: 20px;

  @media (max-width: ${xl}px) {
    margin: 20px 0 0 0;
  }
`;
