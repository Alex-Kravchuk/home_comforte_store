import React, { useEffect, useState } from "react";
import SearchField from "../../../../../searchField/SearchField";
import { TypeContainer, TypeWrapper } from "./Types.styled";
import { message } from "antd";
import { messageStyleConfig } from "../../../../../../../../styles/globalStyles";
import AddNewTypeForm from "./AddNewTypeForm/AddNewTypeForm";

const Types = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const onSubmitHandler = async (values) => {
    try {
      setLoading(true);
      const { category } = values;
      // const response = await createCategory(category);

      messageApi.open({
        type: "success",
        content: "New type successfully added",
        style: messageStyleConfig,
      });
    } catch (error) {
      setError(error.response.data);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <TypeWrapper>
      <SearchField loading={loading} />
      {contextHolder}
      <TypeContainer>
        <AddNewTypeForm onSubmitHandler={onSubmitHandler} loading={loading} />
      </TypeContainer>
    </TypeWrapper>
  );
};

export default Types;
