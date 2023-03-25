import { Button, Card } from "antd";
import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

export const ConstructionItemWrap = styled(Card)`
  min-height: 500px;

  @media (max-width: 375px) {
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
  color: #555759;
  font-size: ${getResponsiveFontSize(24, 22)};
  white-space: normal;
`;

// description
export const ConstructionItemDescrWrap = styled.div`
  color: #555759;
`;
export const ConstructionItemDescrText = styled.div`
  font-size: ${getResponsiveFontSize(18, 16)};
  line-height: 1.4em;
  margin-bottom: 20px;
`;

export const ConstructionItemButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: #555759;
  }

  button:nth-child(odd) {
    margin-bottom: 10px;
  }
`;
export const ConstructionItemButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 25px 25px;

  font-size: ${getResponsiveFontSize(16, 14)};

  @media (max-width: 1024px) {
    padding: 25px 15px;
  }

  @media (max-width: 375px) {
    padding: 25px 10px;
  }
`;

export const ConstructionItemButtonText = styled.div`
  margin-left: 10px;
  white-space: normal;
`;
