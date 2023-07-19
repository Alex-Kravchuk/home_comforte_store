import React, { useEffect, useState } from "react";

import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import SignUpForm from "./signUpForm/SignUpForm";

import { signup } from "../../../../redux/user/userSlice";
import { AuthService } from "../../../../api/user/authService";
import { deleteGuest } from "../../../../redux/guest/guestSlice";

import { PROFILE_ROUTE, USER_ROUTE } from "../../../../utils/routes_consts";

import { messageStyleConfig } from "../../../../styles/globalStyles";
import {
  FormComponentWrapper,
  FormContainer,
} from "../../../../styles/formComponentStyles";

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      messageApi.open({
        type: "error",
        content: error.message,
        style: messageStyleConfig,
      });
    }
  }, [error, messageApi]);

  useEffect(() => {
    if (userData) {
      dispatch(deleteGuest());

      return navigate("../" + USER_ROUTE + "/" + PROFILE_ROUTE, {
        state: { from: pathname },
      });
    }
  }, [userData, navigate, dispatch, pathname]);

  const signUpFormFinishHandler = async (values) => {
    try {
      setLoading(true);
      const response = await AuthService.signup(values);
      dispatch(signup(response));
      form.resetFields();
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
        <SignUpForm
          formDataHandler={signUpFormFinishHandler}
          signUpForm={form}
          loading={loading}
        />
      </FormContainer>
    </FormComponentWrapper>
  );
};

export default SignUp;
