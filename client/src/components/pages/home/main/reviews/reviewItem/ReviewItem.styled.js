import styled from "styled-components";

import { Card } from "antd";
import { viewport_sizes } from "../../../../../../utils/viewport_size_consts";
import { textColors } from "../../../../../../styles/globalStyles";

const { ml } = viewport_sizes;

export const ReviewItemWrapper = styled(Card)`
  .ant-card-meta-title {
    color: ${textColors.main};
  }

  .ant-card-meta-description {
    color: ${textColors.plain};
  }

  min-height: 465px;
  margin-bottom: 50px;

  @media (max-width: ${ml}px) {
    margin-bottom: 0;
  }
`;
export const ReviewContainer = styled.div``;
export const ReviewItemTitelWrap = styled.div``;
export const ReviewItemImg = styled.img``;
export const ReviewItemTitleMain = styled.div`
  font-size: 18px;
`;
export const ReviewItemTitleSub = styled.div`
  font-size: 14px;
`;
