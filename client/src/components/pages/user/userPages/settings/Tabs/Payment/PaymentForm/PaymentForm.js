import React, { useRef, useState } from "react";

import InvoiceBlock from "./InvoiceBlock/InvoiceBlock";
import PaymentCardsBlock from "./PaymentCardsBlock/PaymentCardsBlock";

import {
  FormTitle,
  FormWrapper,
  FormSubTitle,
  FormTitleGroup,
} from "../../../../../../../../styles/formComponentStyles";

const PaymentForm = ({ checkedCard, checkedHandler, onFinishHandler }) => {
  const [alternativeEmailChecked, setAlternaiveEmailChecked] = useState(false);
  const [defaultEmailChecked, setDefaultEmailChecked] = useState(true);

  const alternativeEmailRef = useRef();

  const alternativeEmailHandler = (e) => {
    setAlternaiveEmailChecked((state) => !state);
    setDefaultEmailChecked(() => (e.target.checked ? false : true));
  };

  const defaultEmailHandler = (e) => {
    setDefaultEmailChecked((state) => !state);
    setAlternaiveEmailChecked(() => (e.target.checked ? false : true));
  };

  const submitHandler = () => {
    const values = {
      alternativeEmail: alternativeEmailChecked
        ? alternativeEmailRef.current.input.value
        : "",
      alternativeEmailChecked,
      defaultEmailChecked,
    };

    onFinishHandler(values);
  };

  return (
    <FormWrapper>
      <FormTitleGroup>
        <FormTitle>Payment settings</FormTitle>
        <FormSubTitle>Update your biling details and address</FormSubTitle>
      </FormTitleGroup>

      <InvoiceBlock
        alternativeEmailRef={alternativeEmailRef}
        defaultEmailChecked={defaultEmailChecked}
        alternativeEmailChecked={alternativeEmailChecked}
        defaultEmailHandler={defaultEmailHandler}
        alternativeEmailHandler={alternativeEmailHandler}
      />

      <PaymentCardsBlock
        checkedCard={checkedCard}
        checkedHandler={checkedHandler}
        submitHandler={submitHandler}
      />
    </FormWrapper>
  );
};

export default PaymentForm;
