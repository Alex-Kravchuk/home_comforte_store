import React, { useEffect, useState } from "react";
import { SubTypesContainer, SubTypesWrapper } from "./SubTypes.styled";
import SearchField from "../../../../../searchField/SearchField";
import AddNewSubTypeForm from "./AddNewSubTypeForm/AddNewSubTypeForm";
import { messageStyleConfig } from "../../../../../../../../styles/globalStyles";
import { ProductService } from "../../../../../../../../api/product/productService";
import { message } from "antd";

const SubTypes = () => {
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categories = await ProductService.getAllCategories();

        setCategories(categories);
      } catch (error) {
        setError(error.response.data);
      }
    };

    getCategories();
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

  const onSubmitHandler = async (values) => {
    try {

		console.log('subtypes', values);
		
      setLoading(true);
      const { name, typeId } = values;
      const response = await ProductService.createSubType(name, typeId);

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
    <SubTypesWrapper>
      <SearchField />
	  {contextHolder}
      <SubTypesContainer>
        <AddNewSubTypeForm
          categories={categories}
          types={types}
          loading={loading}
          onSubmitHandler={onSubmitHandler}
        />
      </SubTypesContainer>
    </SubTypesWrapper>
  );
};

export default SubTypes;
