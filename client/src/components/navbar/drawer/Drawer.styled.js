import styled from "styled-components";
import { sizes } from "../../../utils/css_size_consts";


export const DrawerContainer = styled.div`
  display: ${({ smallScreen }) => (smallScreen ? "flex" : "none")};
  justify-content: start;

  @media (max-width: 1024px) {
    flex: 1 1 20%;
  }
`;

export const DrawerIconContainer = styled.div`
  margin-right: 20px;

  @media (max-width: ${sizes.xs.width}px) {
    margin-right: 15px;
  }
`;
