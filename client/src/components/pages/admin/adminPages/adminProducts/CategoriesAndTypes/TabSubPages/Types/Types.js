import React, { useEffect, useState } from "react";

import { message } from "antd";

import AddNewTypeForm from "./AddNewTypeForm/AddNewTypeForm";
import SearchField from "../../../../../searchField/SearchField";

import { messageStyleConfig } from "../../../../../../../../styles/globalStyles";
import { ProductService } from "../../../../../../../../api/product/productService";

import { SubPageContainer, SubPageWrapper } from "../TabSubPages.styled";

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
      // console.log("values", values);

      const combinedData = { ...values, img: typeImg };
      const formdata = new FormData();

      for (const key in combinedData) {
        const element = combinedData[key];
        formdata.append(key, element);
      }

    await ProductService.createType(formdata);

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

  console.log('TYPES RENDER');
  
  return (
    <SubPageWrapper>
      {/* <SearchField loading={loading} /> */}
      {contextHolder}
      <SubPageContainer>
        <AddNewTypeForm
          onSubmitHandler={onSubmitHandler}
          loading={loading}
          categories={categories}
          saveFileHandler={setTypeImg}
        />
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default Types;
