import React, { useState } from "react";

import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";

import {
  AMContainer,
  AMWrapper,
  AMIconContainer,
  AMList,
} from "./AddModifier.styled";
import { Collapse, Empty, Form, Modal, Tooltip } from "antd";
import CreateNewModifierForm from "./CreateNewModifierForm/CreateNewModifierForm";
import ModifierTitle from "./ModifierTitle/ModifierTitle";
import ListTypeModifier from "./ListTypeModifier/ListTypeModifier";
import CellTypeModifier from "./CellTypeModifier/CellTypeModifier";
import TileTypeModifier from "./TileTypeModifier/TileTypeModifier";

const AddModifier = () => {
  const [modifiers, setModifiers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const onDeleteModifier = (key) => {
    setModifiers((state) => state.filter((modifier) => modifier.key !== key));
  };
  const onCreateModifier = ({ name, displaymethod }) => {
    const child =
      displaymethod === "list" ? (
        <ListTypeModifier />
      ) : displaymethod === "tile" ? (
        <TileTypeModifier />
      ) : (
        <CellTypeModifier />
      );

    const newModifier = {
      key: String(modifiers.length + 1),
      label: (
        <ModifierTitle
          id={String(modifiers.length + 1)}
          name={name}
          displaymethod={displaymethod}
          deleteHandler={onDeleteModifier}
        />
      ),
      children: child,
    };

    setModifiers((state) => [...state, newModifier]);
    setIsModalOpen(false);
  };

  const showModalHandler = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onCreateModifier(values);
      })
      .catch((info) => console.log("Something went wrong:", info));
  };

  const modifiersAreExist = modifiers.length > 0;

  return (
    <AMWrapper>
      <AMContainer>
        {modifiersAreExist ? (
          <AMList>
            <Collapse items={modifiers} size="large" expandIconPosition="end" />
          </AMList>
        ) : (
          <Empty description="There are no customization modifiers" />
        )}

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
