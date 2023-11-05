import React, { useState } from "react";

import { Form, Modal, Tooltip } from "antd";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";

import CreateNewModifierForm from "./CreateNewModifierForm/CreateNewModifierForm";

import { AMWrapper, AMContainer, AMIconContainer } from "./AddModifier.styled";

const AddModifier = ({ onAddModifier }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const showModalHandler = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onAddModifier(values);
        setIsModalOpen(false);
      })
      .catch((info) => console.log("Something went wrong:", info));
  };

  return (
    <AMWrapper>
      <AMContainer>
        <Modal
          title="Add a new modifier"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <CreateNewModifierForm form={form} />
        </Modal>

        <AMIconContainer>
          <Tooltip title="Add a new modifier" placement="right">
            <AddToPhotosOutlinedIcon onClick={showModalHandler} />
          </Tooltip>
        </AMIconContainer>
      </AMContainer>
    </AMWrapper>
  );
};

export default AddModifier;
