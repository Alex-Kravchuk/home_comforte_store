import React, { useEffect, useCallback, useState } from "react";

import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import LogInForm from "./LogInForm/LogInForm";
import PageLoader from "../../../loader/pageLoader/PageLoader";
import OfferCreateAccount from "./offerCreateAccount/OfferCreateAccount";

import { login } from "../../../../redux/user/userSlice";
import { AuthService } from "../../../../api/user/authService";
import { deleteGuest } from "../../../../redux/guest/guestSlice";

import { PROFILE_ROUTE, USER_ROUTE } from "../../../../utils/routes_consts";

import { LogInContainer, LogInWrapper } from "./LogIn.styled";
import { messageStyleConfig } from "../../../../styles/globalStyles";

const LogIn = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blockNewSubmit, setBlockNewSubmit] = useState(false);

  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    window.scroll(0, 0);
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
      localStorage.removeItem("guest_token");
      form.resetFields();

      return navigate("../" + USER_ROUTE + "/" + PROFILE_ROUTE, {
        state: { from: pathname },
      });
    }
  }, [userData, navigate, dispatch, pathname, form]);

  const formSubmitHandler = useCallback(
    async (values) => {
      if (blockNewSubmit) return;

      setLoading(true);
      try {
        const response = await AuthService.login(values);
        dispatch(login(response));
      } catch (er) {
        setError(er.response.data);
      } finally {
        setLoading(false);
      }
    },
    [blockNewSubmit]
  );

  return (
    <LogInWrapper>
      {loading && <PageLoader />}
      <LogInContainer>
        {contextHolder}
        <LogInForm loginForm={form} submitHandler={formSubmitHandler} />
        <OfferCreateAccount />
      </LogInContainer>
    </LogInWrapper>
  );
};

export default LogIn;
