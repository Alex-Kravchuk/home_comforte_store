import styled from "styled-components";
import { sizes } from "../../../../utils/css_size_consts";

export const DropdownMenuWrapper = styled.div`
  width: calc(100vw - 17px);
  height: 30vh;
  background: #fff;
  transform: translateY(-2px);
`;
export const DropdownMenuContainer = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${sizes.xxl.width}px) {
    width: ${sizes.xxl.contentContainerWidth}%;
  }

  @media (max-width: ${sizes.xl.width}px) {
    width: ${sizes.xl.contentContainerWidth}%;
  }
`;
export const DropdownMenuLinkContainer = styled.div``;
export const DropdownMenuImgContainer = styled.div``;
