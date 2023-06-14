import React, { useCallback, useEffect, useState } from "react";

import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import SignUpForm from "./signUpForm/SignUpForm";
import PageLoader from "../../../loader/pageLoader/PageLoader";

import { signup } from "../../../../redux/user/userSlice";
import { AuthService } from "../../../../api/user/authService";
import { deleteGuest } from "../../../../redux/guest/guestSlice";

import { USER_ROUTE } from "../../../../utils/routes_consts";

import { FormTitle } from "../Account.styled";
import { SignUpContainer, SignUpWrapper } from "./SignUp.styled";
import { messageStyleConfig } from "../../../../styles/globalStyles";

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blockNewSubmit, setBlockNewSubmit] = useState(false);

  const { userData } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  useEffect(() => {
    if (userData) {
      dispatch(deleteGuest());

      return navigate("../" + USER_ROUTE, { state: { from: pathname } });
    }
  }, [userData, navigate, dispatch, pathname]);

  const signUpFormFinishHandler = useCallback(
    async (values) => {
      if (blockNewSubmit) return;

      setLoading(true);
      try {
        const response = await AuthService.signup(values);
        dispatch(signup(response));
        form.resetFields();
      } catch (er) {
        setError(er.response.data);
      } finally {
        setLoading(false);
      }
    },
    [blockNewSubmit]
  );

  return (
    <SignUpWrapper>
      {loading && <PageLoader />}
      <SignUpContainer>
        <FormTitle>Create an account</FormTitle>
        {contextHolder}
        <SignUpForm
          formDataHandler={signUpFormFinishHandler}
          signUpForm={form}
        />
      </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;
