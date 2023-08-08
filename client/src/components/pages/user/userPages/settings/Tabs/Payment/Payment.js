import React, { useEffect, useState } from "react";

import PaymentForm from "./PaymentForm/PaymentForm";
import { FormComponentWrapper } from "../../../../../../../styles/formComponentStyles";

import { PaymentFormContainer } from "./Payment.styled";

import { checkedCardMOCK } from "../../../../../../../assets/mock/PaymentSettingsMOCK/paymentSettingsMOCK";
import { message } from "antd";
import { messageStyleConfig } from "../../../../../../../styles/globalStyles";
import { useDispatch } from "react-redux";
import { AuthService } from "../../../../../../../api/user/authService";
import { updateUser } from "../../../../../../../redux/user/userSlice";

const Payment = () => {
  const [checkedCard, setCheckedCard] = useState(checkedCardMOCK);
  const onFinishHandler = (values) => {
    console.log(values, "checked card:", checkedCard);
  };

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: error.message,
        style: messageStyleConfig,
      });
    }
  }, [error, messageApi]);

  const paymentFormFinishHandler = async (values) => {
    try {
      setLoading(true);

      const paymentData = {
        checkedCard,
        invoiceReceiptInfo: values,
      };

      setTimeout(() => console.log(paymentData, "payment data"), 500);

      // const response = await AuthService.updateUserData(values);
      // dispatch(updateUser(response));

      messageApi.open({
        type: "success",
        content: "Your data has been successfully changed!",
        style: messageStyleConfig,
      });
    } catch (er) {
      setError(er.response.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <FormComponentWrapper>
      <PaymentFormContainer>
        {contextHolder}
        <PaymentForm
          onFinishHandler={paymentFormFinishHandler}
          checkedHandler={setCheckedCard}
          checkedCard={checkedCard}
        />
      </PaymentFormContainer>
    </FormComponentWrapper>
  );
};

export default Payment;
