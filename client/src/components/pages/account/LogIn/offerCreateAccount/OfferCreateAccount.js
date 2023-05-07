import React from "react";
import {
  OCAButton,
  OCAContainer,
  OCAListItem,
  OCAOffersList,
  OCAWrapper,
} from "./OfferCreateAccount.styled";
import { FormsSubTitle, FormsTitle } from "../../Account.styled";

const OfferCreateAccount = () => {
  return (
    <OCAWrapper>
      <OCAContainer>
        <FormsTitle>New customer? Create an account</FormsTitle>
        <FormsSubTitle>
          Registering takes two minutes — and it’s worth it:
        </FormsSubTitle>
        <OCAOffersList>
          <OCAListItem>Get real-time updates on your order status.</OCAListItem>
          <OCAListItem>Schedule your delivery.</OCAListItem>
          <OCAListItem>
            Update your billing info for quicker checkout.
          </OCAListItem>
          <OCAListItem>Review past purchases.</OCAListItem>
        </OCAOffersList>
        <OCAButton type="primary">Create an account</OCAButton>
      </OCAContainer>
    </OCAWrapper>
  );
};

export default OfferCreateAccount;
