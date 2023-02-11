import styled from "styled-components";
import { viewport_sizes } from "../../../../../utils/vieport_size_consts";

const { l, m } = viewport_sizes;

export const MainVideoWrapper = styled.div`
  margin: 35px 0;

  @media (max-width: ${l}px) {
    margin: 25px 0;
    padding: 0 0 25px 0;
  }

  @media (max-width: ${m}px) {
    margin: 15px 0;
    padding: 0 0 15px 0;
  }
`;
export const MainVideoContent = styled.video`
  width: 100%;
  hight: auto;
`;
