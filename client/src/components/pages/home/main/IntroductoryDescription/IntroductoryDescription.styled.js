import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";
import { marginConsts, textColors } from "../../../../../styles/globalStyles";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

export const { l, m } = viewport_sizes;

export const IntrDescrWrapper = styled.div`
  ${marginConsts}
`;
export const IntrDescrContainer = styled.div``;
export const IntrDescrTitle = styled.h2`
  color: ${textColors.title};
  text-align: center;
  font-size: ${getResponsiveFontSize(28, 20)};
  margin: 0 0 15px 0;
`;
export const IntrDescrSubTitle = styled.div`
  text-align: center;
  font-size: ${getResponsiveFontSize(20, 16)};
  margin: 0 0 15px 0;

  @media (max-width: ${l.width}px) {
    margin: 0 0 20px 0;
  }
`;
export const IntrDescrMadeIn = styled.h4`
  color: ${textColors.title};
  text-align: center;
  font-size: ${getResponsiveFontSize(18, 8)};
`;
