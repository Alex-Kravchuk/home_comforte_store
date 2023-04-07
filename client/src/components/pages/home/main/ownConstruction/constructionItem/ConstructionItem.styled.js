import styled from "styled-components";

import { Button, Card } from "antd";

import { textColors } from "../../../../../../styles/globalStyles";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

const { l, s } = viewport_sizes;

export const ConstructionItemWrap = styled(Card)`
  .ant-card-meta-title,
  .ant-card-meta-description {
    color: ${textColors.main};
  }

  flex: 1 1 33.3%;
  min-height: 500px;

  &:nth-child(even) {
    margin: 0 15px;
  }

  @media (max-width: 970px) {
    &:nth-child(even) {
      margin: 20px 0;
    }
  }

  @media (max-width: ${s}px) {
    .ant-card-body {
      padding: 15px;
    }

    min-height: 300px;
  }
`;

export const ConstructionItemImg = styled.img`
  width: 100%;
`;

export const ConstructionItemTitle = styled.div`
  font-size: ${getResponsiveFontSize(24, 22)};
  white-space: normal;
`;

// ---description-------------------------------------------------------------
export const ConstructionItemDescrWrap = styled.div``;
export const ConstructionItemDescrText = styled.div`
  font-size: ${getResponsiveFontSize(18, 16)};
  line-height: 1.4em;
  margin-bottom: 20px;
`;

export const ConstructionItemButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: ${textColors.main};
  }

  button:nth-child(odd) {
    margin-bottom: 10px;
  }
`;
export const ConstructionItemButton = styled(Button)`
  display: flex;
  align-items: center;
  height: auto;
  padding: 20px 20px;


  @media (max-width: ${l}px) {
    padding: 15px 15px;
  }

  @media (max-width: ${s}px) {
    padding: 10px 10px;
  }
`;

export const ConstructionItemButtonText = styled.div`
  margin-left: 10px;
  white-space: normal;
  font-size: ${getResponsiveFontSize(15, 14)};
`;
