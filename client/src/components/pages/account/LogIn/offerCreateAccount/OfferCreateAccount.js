import React from "react";

import { Link } from "react-router-dom";

import { CREATE_ROUTE } from "../../../../../utils/routes_consts";

import {
  FormTitle,
  FormSubTitle,
  FromSubmitButton,
} from "../../../../../styles/formComponentStyles";

import {
  OCAWrapper,
  OCAListItem,
  OCAContainer,
  OCAOffersList,
} from "./OfferCreateAccount.styled";

const OfferCreateAccount = () => {
  return (
    <OCAWrapper>
      <OCAContainer>
        <FormTitle>New customer? Create an account</FormTitle>
        <FormSubTitle>
          Registering takes two minutes — and it’s worth it:
        </FormSubTitle>
        <OCAOffersList>
          <OCAListItem>Get real-time updates on your order status.</OCAListItem>
          <OCAListItem>Schedule your delivery.</OCAListItem>
          <OCAListItem>
            Update your billing info for quicker checkout.
          </OCAListItem>
          <OCAListItem>Review past purchases.</OCAListItem>
        </OCAOffersList>
        {/* use the path like this for relative display */}
        <Link to={"../" + CREATE_ROUTE}>
          <FromSubmitButton type="primary">Create an account</FromSubmitButton>
        </Link>
      </OCAContainer>
    </OCAWrapper>
  );
};

export default OfferCreateAccount;
