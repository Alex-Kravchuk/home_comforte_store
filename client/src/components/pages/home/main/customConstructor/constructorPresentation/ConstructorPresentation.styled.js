import styled from "styled-components";
import { getResponsiveFontSize } from "../../../../../../helpers/getResponsiveFontSize";

import { viewport_sizes } from "../../../../../../utils/vieport_size_consts";
const { xl} = viewport_sizes;

// CP = ConstructorPresentation

export const CPWrapper = styled.div`
  position: relative;
  flex: 0 0 67.3%;
  width: 67.7%;
  height: 100%;
  min-height: 300px;

  @media (max-width: ${xl}px) {
    order: 1;
    width: 100%;
  }

`;

export const CPContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const CPImgUpperContainer = styled.div`
  ${({ width }) =>
    `
position: absolute;
top: 0;
left: 0;
clip-path: polygon(0 0, ${width}% 0, ${width}% 100%, 0 100%);
width: 100%;
height: auto;

`}
`;
export const CPImgLowerContainer = styled.div`
  ${({ width }) => `
clip-path: polygon(0 0, ${width}% 0, ${width}% 100%, 0 100%);
width: 100%;
height: auto;
`}
`;

export const CPImg = styled.img`
  width: 100%;
  height: auto;
`;

export const OptionDescrptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${getResponsiveFontSize(16, 14)};

  span:nth-child(even) {
    text-align: right;
  }
`;
export const OptionDescrptionItem = styled.span`
  color: #9b9c9e;
  width: 40%;
  line-height: 1.3rem;
  padding: 15px 0;
`;

export const PresentationItem = styled.div``;
