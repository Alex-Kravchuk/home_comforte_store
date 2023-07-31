import React, { useEffect, useState } from "react";
import { ContactsContainer, ContactsWrapper } from "./Contacts.styled";
import {
  FormComponentWrapper,
  FormContainer,
} from "../../../../../../../styles/formComponentStyles";
import ContactsForm from "./ContactsForm/ContactsForm";
import { message } from "antd";
import { messageStyleConfig } from "../../../../../../../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { AuthService } from "../../../../../../../api/user/authService";
import { updateUser } from "../../../../../../../redux/user/userSlice";

const Contacts = () => {
  const { userData } = useSelector((state) => state.user);
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

  const contactsFormFinishHandler = async (values) => {
    try {
      setLoading(true);

      const response = await AuthService.updateUserData(values);
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

  return (
    <FormComponentWrapper>
      <FormContainer>
        {contextHolder}
        <ContactsForm
          loading={loading}
          formDataHandler={contactsFormFinishHandler}
          userData={userData}
        />
      </FormContainer>
    </FormComponentWrapper>
  );
};

export default Contacts;
