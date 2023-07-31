import React, { useRef, useState } from "react";
import {
  PaymentContainer,
  PaymentFormContainer,
  PaymentWrapper,
} from "./Payment.styled";
import { FormComponentWrapper } from "../../../../../../../styles/formComponentStyles";
import PaymentForm from "./PaymentForm/PaymentForm";

const Payment = () => {
  const [checkedCard, setCheckedCard] = useState({
    id: 1,
    system: "visa",
    number: 1231241341123123,
    expiry: "01/2024",
  });
  const onFinishHandler = (values) => {
    console.log(values, "checked card:", checkedCard);
  };
  return (
    <FormComponentWrapper>
      <PaymentFormContainer>
        <PaymentForm
          onFinishHandler={onFinishHandler}
          checkedHandler={setCheckedCard}
          checkedCard={checkedCard}
        />
      </PaymentFormContainer>
    </FormComponentWrapper>
  );
};

export default Payment;
