import { Form } from "antd";
import React from "react";

import UploadAvatar from "../../../../../../../../user/userPages/settings/Tabs/Personal/UploadAvatar/UploadImg";

import {
  FormInput,
  FormLabel,
} from "../../../../../../../../../../styles/formComponentStyles";
import {
  AddProductFormBlock,
  AddProductFormBlockTitle,
} from "../../AddProduct.styled";

const ImageContentForm = () => {
  return (
    <Form layout="vertical">
      <AddProductFormBlock>
        <AddProductFormBlockTitle>Images</AddProductFormBlockTitle>
        <Form.Item label={<FormLabel>Product images</FormLabel>}>
          <UploadAvatar />
        </Form.Item>

		<Form.Item label={<FormLabel>Product preview</FormLabel>}>
          <UploadAvatar />
        </Form.Item>
      </AddProductFormBlock>
    </Form>
  );
};

export default ImageContentForm;
