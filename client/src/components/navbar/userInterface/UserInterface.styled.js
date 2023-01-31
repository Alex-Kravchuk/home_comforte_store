import styled from "styled-components";
import { sizes } from "../../../utils/css_size_consts";

export const UserInterfaceWrapper = styled.div`
  display: flex;
  justify-content: end;

  @media (max-width: 1024px) {
    flex: 1 1 20%;
  }
`;
export const UserInterfaceContainer = styled.div`
  display: flex;
`;
export const UserInterfaceIconContainer = styled.div`
  margin-left: 20px;

  @media (max-width: ${sizes.xs.width}px) {
    margin-left: 15px;
  }
`;
