import React, { useEffect, useState } from "react";

import { message } from "antd";


import AddNewCategoryForm from "./AddNewCategoryForm/AddNewCategoryForm";

import { messageStyleConfig } from "../../../../../../../../styles/globalStyles";
import { ProductService } from "../../../../../../../../api/product/productService";

import { SubPageContainer, SubPageWrapper } from "../TabSubPages.styled";

const Categories = () => {
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
      await ProductService.createCategory(category);

      messageApi.open({
        type: "success",
        content: "New category successfully added",
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
    <SubPageWrapper>
      {contextHolder}
      <SubPageContainer>
        <AddNewCategoryForm
          onSubmitHandler={onSubmitHandler}
          loading={loading}
        />
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default Categories;
