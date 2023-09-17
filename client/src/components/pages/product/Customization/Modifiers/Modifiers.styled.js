import styled from "styled-components";
import { viewport_sizes } from "../../../../../utils/viewport_size_consts";

const { xl } = viewport_sizes;

export const ModifiersWrapper = styled.div`
  margin-top: 30px;


  @media (max-width: ${xl}px) {
    margin: 0;

    .ant-collapse {
      border-radius: 0;
    }
    .ant-collapse > .ant-collapse-item {
      border-radius: 0px;
    }
  }
`;
export const ModifiersContainer = styled.div``;
