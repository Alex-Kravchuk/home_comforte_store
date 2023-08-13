import React, { useEffect, useState } from "react";
import SearchField from "../../../../../searchField/SearchField";
import { TypeContainer, TypeWrapper } from "./Types.styled";
import { message } from "antd";
import { messageStyleConfig } from "../../../../../../../../styles/globalStyles";
import AddNewTypeForm from "./AddNewTypeForm/AddNewTypeForm";
import { ProductService, getAllCategories } from "../../../../../../../../api/product/productService";

const Types = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [typeImg, setTypeImg] = useState();

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
      setLoading(true);
      console.log('values', values);
      
      const combinedData = { ...values, img: typeImg };
      const formdata = new FormData();

      for (const key in combinedData) {
        const element = combinedData[key];
        formdata.append(key, element);
      }

      const response = await ProductService.createType(formdata)

      // console.log("onSubmit type", { category, type, img: typeImg });
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
        <AddNewTypeForm
          onSubmitHandler={onSubmitHandler}
          loading={loading}
          categories={categories}
          saveFileHandler={setTypeImg}
        />
      </TypeContainer>
    </TypeWrapper>
  );
};

export default Types;
