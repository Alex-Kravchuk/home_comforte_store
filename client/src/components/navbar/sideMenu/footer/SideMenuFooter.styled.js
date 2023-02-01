import styled from "styled-components";

export const SideMenuFooterWrapper = styled.div``;
export const SideMenuFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 16px;
`;
export const SideMenuFooterItem = styled.div`
  padding: 15px 0;
  font-size: 20px;

  a {
    color: #5e5e5e;

    &:active {
      color: #000;
    }
  }
`;
