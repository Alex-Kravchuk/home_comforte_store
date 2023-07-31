import React, { useEffect, useState } from "react";

import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";

import PersonalForm from "./PersonalForm/PersonalForm";

import { updateUser } from "../../../../../../../redux/user/userSlice";
import { AuthService } from "../../../../../../../api/user/authService";

import { PersonalWrapper } from "./Personal.styled";
import { messageStyleConfig } from "../../../../../../../styles/globalStyles";
import { FormContainer } from "../../../../../../../styles/formComponentStyles";

const Personal = () => {
  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: error.message,
        style: messageStyleConfig,
      });
    }
  }, [error, messageApi]);

  const onFinishHandler = async (values) => {
    try {
      setLoading(true);
      const combinedData = { ...values, avatar };
      const formdata = new FormData();

      for (const key in combinedData) {
        const element = combinedData[key];
        formdata.append(key, element);
      }

      const response = await AuthService.updateUserData(formdata);
      dispatch(updateUser(response));

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

  const saveFileHandler = (file) => {
    setAvatar(file);
  };

  return (
    <PersonalWrapper avatar={avatar}>
      <FormContainer>
        {contextHolder}
        <PersonalForm
          userData={userData}
          loading={loading}
          onFinishHandler={onFinishHandler}
          saveFileHandler={saveFileHandler}
        />
      </FormContainer>
    </PersonalWrapper>
  );
};

export default Personal;
