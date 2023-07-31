import React, { useRef, useState } from "react";

import { Form } from "antd";

import {
  FormTitle,
  FormWrapper,
  FormSubTitle,
  FormTitleGroup,
} from "../../../../../../../../styles/formComponentStyles";

import InvoiceBlock from "./InvoiceBlock/InvoiceBlock";
import PaymentCardsBlock from "./PaymentCardsBlock/PaymentCardsBlock";

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

      <Form onFinish={submitHandler} layout="vertical">
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
        />
      </Form>
    </FormWrapper>
  );
};

export default PaymentForm;
