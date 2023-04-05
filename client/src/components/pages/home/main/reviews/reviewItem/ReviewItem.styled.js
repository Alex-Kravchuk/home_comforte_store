import styled from "styled-components";

import { Card } from "antd";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";

const { ml } = viewport_sizes;

export const ReviewItemWrapper = styled(Card)`
  min-height: 465px;
  margin-bottom: 50px;

  @media (max-width: ${ml}px) {
    margin-bottom: 0;
  }
`;
export const ReviewContainer = styled.div``;
export const ReviewItemTitelWrap = styled.div``;
export const ReviewItemImg = styled.img``;
export const ReviewItemTitelMain = styled.div`
  font-size: 18px;
`;
export const ReviewItemTitelSub = styled.div`
  color: #4f5153;
  font-size: 14px;
`;
