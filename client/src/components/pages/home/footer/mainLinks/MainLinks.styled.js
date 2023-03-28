import styled from "styled-components";

// ML = MainLinks + [block name]

export const MLWrapper = styled.div``;
export const MLContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// ------------------------------------------------- links block
export const MLItemsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  font-size: 18px;
`;
export const MLColumn = styled.div``;
export const MLColumnTitle = styled.div`
  padding-bottom: 10px;
`;
export const MLItem = styled.div`
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  left: 0;
  margin-bottom: 10px;

  &:hover {
    left: 5px;
  }
`;

// -------------------------------------------------- FAQ block
export const MLFAQContainer = styled.div``;
export const MLFAQTitle = styled.div``;
export const MLFAQTitleMain = styled.div``;
export const MLFAQTitleSub = styled.div``;
export const MLFAQItems = styled.div``;
export const MLFAQItemWrap = styled.div``;
export const MLFAQItemIcon = styled.div``;
export const MLFAQItemName = styled.div``;
export const MLFAQItemAddInfo = styled.div``;
