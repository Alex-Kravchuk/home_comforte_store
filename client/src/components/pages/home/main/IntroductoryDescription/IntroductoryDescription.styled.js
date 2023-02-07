import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../helpers/getResponsiveFontSize";
import { viewport_sizes } from "../../../../../utils/vieport_size_consts";

export const { l, m } = viewport_sizes;

export const IntrDescrWrapper = styled.div`
  margin-top: 35px;

  @media (max-width: ${l}px) {
    margin-top: 25px;
  }

  @media (max-width: ${m}px) {
    margin-top: 15px;
  }
`;
export const IntrDescrContainer = styled.div``;
export const IntrDescrTitle = styled.h2`
  color: #1e1f24;
  text-align: center;
  font-size: ${getResponsiveFontSize(28, 20)};
  margin: 0 0 15px 0;
`;
export const IntrDescrSubTitle = styled.div`
  color: gray;
  text-align: center;
  font-size: ${getResponsiveFontSize(20, 16)};
  margin: 0 0 15px 0;

  @media (max-width: ${l.width}px) {
    margin: 0 0 20px 0;
  }
`;
export const IntrDescrMadeIn = styled.h4`
  text-align: center;
  font-size: ${getResponsiveFontSize(18, 8)};
`;
