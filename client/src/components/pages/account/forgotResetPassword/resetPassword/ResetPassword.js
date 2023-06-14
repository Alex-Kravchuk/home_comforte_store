import React, { useCallback, useEffect, useState } from "react";
import { FRPContainer, FRPWrapper } from "../ForgotResetPassord.styled";
import { FormSubTitle, FormTitle } from "../../Account.styled";
import ResetPasswordForm from "./resetPasswordForm";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { messageStyleConfig } from "../../../../../styles/globalStyles";
import { AuthService } from "../../../../../api/user/authService";
import PageLoader from "../../../../loader/pageLoader/PageLoader";
import SuccessfullyReset from "./SuccessfullyReset/SuccessfullyReset";

const ResetPassword = () => {
  const { token, userId } = useParams();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blockNewSubmit, setBlockNewSubmit] = useState(false);
  const [successfullyReseted, setSuccessfullyReseted] = useState(false);

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
    },
    [blockNewSubmit]
  );
  return (
    <FRPWrapper>
      {loading && <PageLoader />}
      <FRPContainer>
        {contextHolder}
        {successfullyReseted ? (
          <SuccessfullyReset />
        ) : (
          <>
            <FormTitle>Come up with a new password</FormTitle>
            <FormSubTitle>
              Please enter a new password for your account below.
            </FormSubTitle>
            <ResetPasswordForm submitHandler={submitHandler} />
          </>
        )}
      </FRPContainer>
    </FRPWrapper>
  );
};

export default ResetPassword;
