import styled from "styled-components";

import { getResponsiveFontSize } from "../../../helpers/getResponsiveFontSize";

export const MenuWrapper = styled.div`
  height: 100%;

  font-size: ${getResponsiveFontSize(18, 16, 1024)};

  a {
    text-decoration: none;
    color: #636466;
  }

  a:hover {
    color: #000;
  }
`;
export const MenuContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const MenuItem = styled.div`
  margin: 0 20px;
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: ${({ activeMenuItem }) =>
    activeMenuItem ? "2px solid black" : "none"};

  &:hover {
    border-bottom: 2px solid black;
  }

  @media (max-width: 1200px) {
    margin: 0 10px;
  }
`;
