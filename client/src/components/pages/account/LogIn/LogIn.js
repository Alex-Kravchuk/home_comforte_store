import React, { useEffect, useState } from "react";

import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import LogInForm from "./LogInForm/LogInForm";
import OfferCreateAccount from "./offerCreateAccount/OfferCreateAccount";

import { login } from "../../../../redux/user/userSlice";
import { AuthService } from "../../../../api/user/authService";
import { deleteGuest } from "../../../../redux/guest/guestSlice";

import {
  ADMIN_ROUTE,
  PROFILE_ROUTE,
  USER_ROUTE,
} from "../../../../utils/routes_consts";

import { LogInContainer, LogInWrapper } from "./LogIn.styled";
import { messageStyleConfig } from "../../../../styles/globalStyles";

const LogIn = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  console.log("LOGIN PAGE RENDER");

  useEffect(() => {
    window.scroll(0, 0);
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
      localStorage.removeItem("guest_token");
      form.resetFields();

      const route = userData.role.includes("ADMIN")
        ? ADMIN_ROUTE
        : USER_ROUTE + "/" + PROFILE_ROUTE;

      return navigate("../" + route, {
        state: { from: pathname },
      });
    }
  }, [userData, navigate, dispatch, pathname, form]);

  const formSubmitHandler = async (values) => {
    try {
      setLoading(true);
      const response = await AuthService.login(values);
      dispatch(login(response));
    } catch (er) {
      setError(er.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LogInWrapper>
      <LogInContainer>
        {contextHolder}
        <LogInForm
          loginForm={form}
          submitHandler={formSubmitHandler}
          loading={loading}
        />
        <OfferCreateAccount />
      </LogInContainer>
    </LogInWrapper>
  );
};

export default LogIn;
