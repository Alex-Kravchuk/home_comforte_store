import styled from "styled-components";

import { viewport_sizes } from "../../../utils/viewport_size_consts";

const { l } = viewport_sizes;

export const EndFooterWrapper = styled.div`
  background: #dbd7d5;
  padding: 20px;

  @media (max-width: ${l}px) {
    padding: 10px;
  }
`;
export const EndFooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const EndFooterBrandName = styled.div`
  margin: 5px 0 5px 20px;
  font-size: 14px;
  color: #656565;
`;

// ---links---------------------------------------------------------------------------------
// should be <a></a> tag or Link in the future
export const EndFooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const EndFooterLinkItem = styled.div`
  position: relative;
  margin: 5px 0 5px 20px;
  font-size: 14px;
  color: #656565;
  transition: all .2s ease;

  &:before {
    content: " ";
    position: absolute;
    top: 50%;
    left: -10%;
    transform: translate(0, -50%);
    width: 5px;
    height: 5px;
    border-radius: 10px;
    background: #656565;
    display: block;
  }

  &:hover {
    color: #000;

    &:before {
      background: #000;
    }
  }
`;

// ---icons---------------------------------------------------------------------------------
export const EndFooterIconsContainer = styled.div``;
export const EndFooterIcon = styled.div``;
