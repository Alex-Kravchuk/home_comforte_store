import React, { useEffect, useState } from "react";
import SearchField from "../../../../../searchField/SearchField";
import { CategoryContainer, CategoryWrapper } from "./Categories.styled";
import AddNewCategoryForm from "./AddNewCategoryForm/AddNewCategoryForm";
import { createCategory } from "../../../../../../../../api/product/productAPI";
import { message } from "antd";
import { messageStyleConfig } from "../../../../../../../../styles/globalStyles";

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
      const response = await createCategory(category);

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
    <CategoryWrapper>
      <SearchField />
      {contextHolder}
      <CategoryContainer>
        <AddNewCategoryForm
          onSubmitHandler={onSubmitHandler}
          loading={loading}
        />
      </CategoryContainer>
    </CategoryWrapper>
  );
};

export default Categories;
