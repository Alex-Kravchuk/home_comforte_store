import styled from "styled-components";
import { getResponsiveSize } from "../../../../helpers/getResponsiveSize";

import { getResponsiveFontSize } from "../../../../helpers/getResponsiveFontSize";
import { sizes } from "../../../../utils/css_size_consts";

export const DropdownMenuWrapper = styled.div`
  // 17px is default right position dropdown component antd
  width: calc(100vw - 17px);
  height: 30vh;
  background: #fff;
  transform: translateY(-2px);
`;
export const DropdownMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  height: 100%;
  margin: 0 auto;
`;

export const DropdownMenuLinkContainer = styled.div`
  height: 80%;
  flex: 1 1 66.6%;
`;
export const DropdownMenuLinkList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 80%;
  margin-top: 10px;
`;

export const CategoriesTitle = styled.div`
  display: inline-block;
  border-bottom: 1px solid lightgray;
  font-size: ${getResponsiveFontSize(12, 10, 1024)};
  color: #787878;
`;
export const DropdownMenuLink = styled.div`
  transition: all 0.2s ease;

  padding: 0 0 10px 0;
  font-size: ${getResponsiveFontSize(16, 14, 1024)};

  a {
    text-decoration: none;
    color: #636466;
  }

  &:hover {
    // for deleting margin between header and dropdown
    transform: translate(4px);

    a:hover {
      color: #000;
    }
  }
`;
export const DropdownMenuImgContainer = styled.div`
  flex: 1 1 33.3%;
  width: ${getResponsiveSize(sizes.global.imgWidth)};
  height: ${getResponsiveSize(sizes.global.imgHeight)};
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;
export const DropdownImgItem = styled.img``;
