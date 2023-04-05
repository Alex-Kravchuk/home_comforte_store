import styled from "styled-components";

export const EndFooterWrapper = styled.div`
  background: #dbd7d5;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const EndFooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const EndFooterBrandName = styled.div`
  margin: 5px 0 5px 20px;
`;
// ------links
export const EndFooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const EndFooterLinkItem = styled.div`
  position: relative;
  margin: 5px 0 5px 20px;

  &:before {
    content: " ";
    position: absolute;
    top: 50%;
    left: -10%;
    transform: translate(0, -50%);
    width: 5px;
    height: 5px;
    border-radius: 10px;
    background: #000;
    display: block;
  }
`;
// -----icons
export const EndFooterIconsContainer = styled.div``;
export const EndFooterIcon = styled.div``;
