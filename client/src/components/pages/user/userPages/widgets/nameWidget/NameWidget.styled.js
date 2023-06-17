import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

// NW = NameWidget

export const NWWrapper = styled.div`
  margin-bottom: 20px;
`;
export const NWContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NWAvatarNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NWAvatar = styled.div`
  margin-right: 30px;
`;
export const NWUserName = styled.div`
  color: #000000;
  font-size: ${getResponsiveFontSize(20, 16)};
`;
export const NWEditBtn = styled.div``;
