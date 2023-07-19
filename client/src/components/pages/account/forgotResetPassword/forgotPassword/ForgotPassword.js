import React, { useEffect, useState } from "react";

import { message } from "antd";

import ForgotPasswordForm from "./ForgotPasswordForm";
import SuccessfullySending from "./SuccessfullySending/SuccessfullySending";

import { AuthService } from "../../../../../api/user/authService";

import {
  FormComponentWrapper,
  FormContainer,
} from "../../../../../styles/formComponentStyles";

import { messageStyleConfig } from "../../../../../styles/globalStyles";

const ForgotPassword = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSentSuccsessfully, setEmailSentSuccessfully] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: error.message,
        style: messageStyleConfig,
      });
    }
  }, [error, messageApi]);

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const response = await AuthService.forgotPassword(values);
      if (response.status === 200) {
        setEmailSentSuccessfully(true);
      }
    } catch (er) {
      setError(er.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormComponentWrapper>
      <FormContainer>
        {contextHolder}
        {emailSentSuccsessfully ? (
          <SuccessfullySending />
        ) : (
          <ForgotPasswordForm submitHandler={submitHandler} loading={loading} />
        )}
      </FormContainer>
    </FormComponentWrapper>
  );
};

export default ForgotPassword;
