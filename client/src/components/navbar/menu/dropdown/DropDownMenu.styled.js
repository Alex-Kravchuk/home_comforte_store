import styled, { css } from "styled-components";

import { getResponsiveFontSize } from "../../../../helpers/getResponsiveFontSize";
import { sizes } from "../../../../utils/css_size_consts";

export const DropdownMenuWrapper = styled.div`
  position: absolute;
  z-index: 16;
  top: 100%;
  left: 0;
  width: 100%;
  height: auto;
  background: #fff;
  transition: all 0.3s ease;
  border-top: 1px solid lightgray;
  padding: 50px 0;

  ${({ currentHover }) =>
    currentHover !== false
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
  }};
`;
export const DropdownMenuContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  flex-wrap: wrap;
`;

export const TypeColumn = styled.div`
  width: 300px;
  margin: 0 15px 45px 15px;
`;

export const TypeTitleContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 15px 15px 0;
  border-bottom: 1px solid lightgray;

  img {
    transition: all 0.4s ease;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    div {
      left: 10px;
    }
  }
`;
export const TypeTitleName = styled.div`
  position: relative;
  left: 0;
  font-size: ${getResponsiveFontSize(14, 10, 1024)};
  color: #787878;
  margin-left: 15px;
  transition: all 0.4s ease;
`;
export const TypeTitleImg = styled.img`
  width: 60px;
  height: 30px;
`;

export const SubTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const SubTypeName = styled.div`
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease;

  padding: 0 0 10px 0;
  font-size: ${getResponsiveFontSize(14, 12, 1024)};

  a {
    text-decoration: none;
    color: #636466;
  }

  &:hover {
    transform: translate(4px);
    color: #000;
  }
`;
