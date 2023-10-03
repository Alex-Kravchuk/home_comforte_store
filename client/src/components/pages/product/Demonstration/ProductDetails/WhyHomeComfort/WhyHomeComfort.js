import React from "react";

import {
  ListOfBenefits,
  ListOfBenefitsItem,
  WhyHomeComfortWrapper,
  WhyHomeComfortContainer,
} from "./WhyHomeComfort.styled";

const WhyHomeComfort = () => {
  return (
    <WhyHomeComfortWrapper>
      <WhyHomeComfortContainer>
        <ListOfBenefits>
          <ListOfBenefitsItem>
            From factory to front door; leading to extraordinarily fair pricing.
          </ListOfBenefitsItem>
          <ListOfBenefitsItem>
            Furniture made-to-order; enabling unique customization.
          </ListOfBenefitsItem>
          <ListOfBenefitsItem>
            Design driven, quality centered. We're obsessed with quality
            control.
          </ListOfBenefitsItem>
          <ListOfBenefitsItem>
            People loving. One point of contact and a 60-day return policy.
          </ListOfBenefitsItem>
        </ListOfBenefits>
      </WhyHomeComfortContainer>
    </WhyHomeComfortWrapper>
  );
};

export default WhyHomeComfort;
