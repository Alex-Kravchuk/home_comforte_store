import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";

export const WidgetWrapper = styled.div`
  box-shadow: 0 0 3px 0.5px rgba(21, 21, 21, 0.1),
    0 1px 10px 0 rgba(21, 21, 21, 0.1);
  padding: 15px;
  border-radius: 5px;
  box-sizing: border-box;
  height: inherit;
`;

export const WidgetTitleContainer = styled.div`
  padding: 10px 0 20px 0;

  display: flex;
`;
export const WidgetTitle = styled.div`
  font-size: ${getResponsiveFontSize(20, 16)};
  margin-left: 10px;
  color: #000000;
`;
