import styled from "styled-components";
import { textColors } from "../../../../../../../styles/globalStyles";

// PLI = ProductListItem

export const PLIWrapper = styled.div`
  width: 100%;
`;
export const PLIContainer = styled.div``;

export const PLIInterfaceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PLIName = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
export const PLIInterface = styled.div`
  cursor: pointer;
`;

export const PLIAdditionalInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PLIAdditionalInfo = styled.div`
  color: ${textColors.plain};
  flex: 1 1 40%;
`;
export const PLIAdditionalInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PLIAdditionalInfoBlockLable = styled.div``;
export const PLIAdditionalInfoBlockContent = styled.div`
  font-weight: 600;
`;
export const PLIImgContainer = styled.div`
  flex: 1 1 60%;
  display: flex;
  justify-content: end;
`;

export const PLIImg = styled.img`
  width: 150px;
  height: auto;
`;
