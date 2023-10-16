import { Button } from "antd";
import styled from "styled-components";

export const AdminMenuWrapper = styled.div`
  flex: 1 0 auto;

  position: sticky;
  top: 70px;

  @media (max-width: 1024px) {
    width: 100%;
    position: static;
  }
`;

export const AdminMenuToggleBtn = styled(Button)`
  margin: 0 0 10px 12px;
`;
