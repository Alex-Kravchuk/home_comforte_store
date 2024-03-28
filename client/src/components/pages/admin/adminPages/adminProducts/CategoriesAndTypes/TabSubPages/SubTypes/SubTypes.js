import React, { useEffect, useState } from "react";

import { message } from "antd";
import { useDispatch } from "react-redux";

import AddNewSubTypeForm from "./AddNewSubTypeForm/AddNewSubTypeForm";

import { messageStyleConfig } from "../../../../../../../../styles/globalStyles";
import { ProductService } from "../../../../../../../../api/product/productService";
import { SubPageContainer, SubPageWrapper } from "../../../AdminProducts.styled";
import { saveUpdatedMenuData } from "../../../../../../../../redux/loading/loadingSlice";

const SubTypes = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    // TODO remove this request
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
      const { name, typeId } = values;
      await ProductService.createSubType(name, typeId);

      const updatedMenuData = await ProductService.getAllCategories();
      dispatch(saveUpdatedMenuData(updatedMenuData));

      messageApi.open({
        type: "success",
        content: "New subtype successfully added",
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
        <AddNewSubTypeForm
          categories={categories}
          loading={loading}
          onSubmitHandler={onSubmitHandler}
        />
      </SubPageContainer>
    </SubPageWrapper>
  );
};

export default SubTypes;
