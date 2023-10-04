import React from "react";

import { Rate } from "antd";

import {
  RHTitle,
  RHWrapper,
  RHRateValue,
  RHContainer,
  RHRateContainer,
  RHRateValueInNumber,
} from "./ReviewsHeader.styled";

const ReviewsHeader = () => {
  return (
    <RHWrapper>
      <RHContainer>
        <RHTitle>Read reviews from our customers</RHTitle>
        <RHRateContainer>
          <RHRateValueInNumber>4.5</RHRateValueInNumber>
          <RHRateValue>
            <Rate defaultValue={4.5} disabled allowHalf />
          </RHRateValue>
        </RHRateContainer>
      </RHContainer>
    </RHWrapper>
  );
};

export default ReviewsHeader;
