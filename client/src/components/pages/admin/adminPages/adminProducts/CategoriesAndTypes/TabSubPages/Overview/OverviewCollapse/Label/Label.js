import React, { useRef, useState } from "react";

import { Button, Input, Popconfirm, Tooltip } from "antd";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {
  LabelName,
  LabelWraper,
  LabelContainer,
  LabelButtonGroupe,
  LabelEditInputWrapper,
} from "./Label.styled";

const Label = ({ item, confirmDelete, confirmSave }) => {
  const [showEditFiled, setShowEditField] = useState(false);
  //   const [newItemName, setNewItemName] = useState()

  const newItemNameRef = useRef();

  const { name, id } = item;

  const stopPropagationHandler = (e) => e.stopPropagation();

  const onConfirmEditHandler = () => {
    confirmSave(id, name, newItemNameRef.current.input.value);
    setShowEditField(false);
  };
  return (
    <LabelWraper>
      <LabelContainer>
        <LabelName>{name}</LabelName>

        <LabelButtonGroupe>
          <LabelEditInputWrapper
            edit={showEditFiled}
            onClick={stopPropagationHandler}
          >
            <Input
              placeholder="Please input a new name"
              defaultValue={name}
              ref={newItemNameRef}
            />
            <Popconfirm
              title="Save"
              description={`Are you sure to save a new name?`}
              onConfirm={onConfirmEditHandler}
              okText="Yes"
              cancelText="No"
            >
              <Button>Save</Button>
            </Popconfirm>
          </LabelEditInputWrapper>
          <Tooltip
            title={showEditFiled ? "Cancel" : "Edit"}
            placement="left"
            onClick={stopPropagationHandler}
          >
            <Button onClick={() => setShowEditField((state) => !state)}>
              {showEditFiled ? (
                <CancelOutlinedIcon />
              ) : (
                <ModeEditOutlineOutlinedIcon />
              )}
            </Button>
          </Tooltip>
          <Tooltip
            title="Delete"
            placement="right"
            onClick={stopPropagationHandler}
          >
            <Popconfirm
              title="Delete"
              description={
                <div>
                  Are you sure to delete
                  <strong> {name}</strong>?
                </div>
              }
              onConfirm={confirmDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button>
                <DeleteOutlineOutlinedIcon />
              </Button>
            </Popconfirm>
          </Tooltip>
        </LabelButtonGroupe>
      </LabelContainer>
    </LabelWraper>
  );
};

export default Label;
