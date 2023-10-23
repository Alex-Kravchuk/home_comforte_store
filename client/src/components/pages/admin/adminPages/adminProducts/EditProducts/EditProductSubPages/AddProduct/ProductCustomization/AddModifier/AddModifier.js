import React, { useState } from "react";

import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";

import {
  AMContainer,
  AMWrapper,
  AMIconContainer,
  AMList,
} from "./AddModifier.styled";
import { Collapse, Form, Modal, Tooltip } from "antd";
import CreateNewModifierForm from "./CreateNewModifierForm/CreateNewModifierForm";
import ModifierTitle from "./ModifierTitle/ModifierTitle";
import ListTypeModifier from "./ListTypeModifier/ListTypeModifier";
import CellTypeModifier from "./CellTypeModifier/CellTypeModifier";
import TileTypeModifier from "./TileTypeModifier/TileTypeModifier";

const AddModifier = () => {
  const [modifiers, setModifiers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

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
      label: <ModifierTitle name={name} displaymethod={displaymethod} />,
      children: child,
    };

    setModifiers((state) => [...state, newModifier]);
  };

  const showModalHandler = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleOk = () => {
    setIsModalOpen(false);

    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onCreateModifier(values);
      })
      .catch((info) => console.log("Something went wrong:", info));
  };

  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>text1</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>text2</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>text3</p>,
    },
  ];

  return (
    <AMWrapper>
      <AMContainer>
        <AMList>
          <Collapse
            items={modifiers}
            defaultActiveKey={["1"]}
            size="large"
            expandIconPosition="end"
          />
        </AMList>

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
