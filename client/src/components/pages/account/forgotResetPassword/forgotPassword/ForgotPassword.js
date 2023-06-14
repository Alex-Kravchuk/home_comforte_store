import React, { useCallback, useEffect, useState } from "react";

import { message } from "antd";

import ForgotPasswordForm from "./ForgotPasswordForm";
import SuccessfullySending from "./SuccessfullySending/SuccessfullySending";

import { AuthService } from "../../../../../api/user/authService";
import PageLoader from "../../../../loader/pageLoader/PageLoader";

import { FormSubTitle, FormTitle } from "../../Account.styled";
import { FRPContainer, FRPWrapper } from "../ForgotResetPassord.styled";
import { messageStyleConfig } from "../../../../../styles/globalStyles";

const ForgotPassword = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blockNewSubmit, setBlockNewSubmit] = useState(false);
  const [emailSentSuccsessfully, setEmailSentSuccessfully] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (error) {
      setBlockNewSubmit(true);
      messageApi
        .open({
          type: "error",
          content: error.message,
          style: messageStyleConfig,
        })
        .then(() => setBlockNewSubmit(false));
    }
  }, [error, messageApi]);

  const submitHandler = useCallback(
    async (values) => {
      try {
        if (blockNewSubmit) return;
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
    },
    [blockNewSubmit]
  );

  return (
    <FRPWrapper>
      {loading && <PageLoader from="login" />}
      <FRPContainer>
        {contextHolder}
        {emailSentSuccsessfully ? (
          <SuccessfullySending />
        ) : (
          <>
            <FormTitle>Reset your password</FormTitle>
            <FormSubTitle>
              Please enter your email address below. You will receive a link to
              reset your password.
            </FormSubTitle>
            <ForgotPasswordForm submitHandler={submitHandler} />
          </>
        )}
      </FRPContainer>
    </FRPWrapper>
  );
};

export default ForgotPassword;
