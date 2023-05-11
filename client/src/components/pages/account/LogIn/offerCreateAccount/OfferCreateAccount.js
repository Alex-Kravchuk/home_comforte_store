import React from "react";
import {
  OCAButton,
  OCAContainer,
  OCAListItem,
  OCAOffersList,
  OCAWrapper,
} from "./OfferCreateAccount.styled";
import { FormSubTitle, FormTitle } from "../../Account.styled";
import { Link } from "react-router-dom";
import {
  ACCOUNT_ROUTE,
  CREATE_ROUTE,
} from "../../../../../utils/routes_consts";

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
          <OCAButton type="primary">Create an account</OCAButton>
        </Link>
      </OCAContainer>
    </OCAWrapper>
  );
};

export default OfferCreateAccount;
