import React, { useEffect, useState } from "react";

import { message } from "antd";
import { useParams } from "react-router-dom";

import ResetPasswordForm from "./resetPasswordForm";
import SuccessfullyReset from "./SuccessfullyReset/SuccessfullyReset";

import { AuthService } from "../../../../../api/user/authService";

import {
  FormComponentWrapper,
  FormContainer,
} from "../../../../../styles/formComponentStyles";
import { messageStyleConfig } from "../../../../../styles/globalStyles";

const ResetPassword = () => {
  const { token, userId } = useParams();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successfullyReseted, setSuccessfullyReseted] = useState(false);

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
      const payload = { token, userId, password: values.password };
      const response = await AuthService.resetPassword(payload);
      if (response.status === 200) {
        setSuccessfullyReseted(true);
      }
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormComponentWrapper>
      <FormContainer>
        {contextHolder}
        {successfullyReseted ? (
          <SuccessfullyReset />
        ) : (
          <ResetPasswordForm submitHandler={submitHandler} loading={loading} />
        )}
      </FormContainer>
    </FormComponentWrapper>
  );
};

export default ResetPassword;
