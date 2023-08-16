import React, { useState } from "react";

import { Button, Input, Popconfirm, Tooltip } from "antd";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {
  LabelName,
  LabelWraper,
  LabelContainer,
  LabelButtonGroupe,
  LabelEditInputWrapper,
} from "./Label.styled";

const Label = ({ confirm, cancel, children }) => {
  const [showEditFiled, setShowEditField] = useState(false);

  const stopPropagationHandler = (e) => e.stopPropagation();
  return (
    <LabelWraper>
      <LabelContainer>
        <LabelName>{children}</LabelName>

        <LabelButtonGroupe>
          <LabelEditInputWrapper
            edit={showEditFiled}
            onClick={stopPropagationHandler}
          >
            <Input
              placeholder="Please input a new name"
              defaultValue={children}
            />
            <Popconfirm
              title="Save"
              description={`Are you sure to save a new name?`}
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button>Save</Button>
            </Popconfirm>
          </LabelEditInputWrapper>
          <Tooltip
            title="Edit"
            placement="left"
            onClick={stopPropagationHandler}
          >
            <Button onClick={() => setShowEditField((state) => !state)}>
              <ModeEditOutlineOutlinedIcon />
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
                  <strong> {children}</strong>?
                </div>
              }
              onConfirm={confirm}
              onCancel={cancel}
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
