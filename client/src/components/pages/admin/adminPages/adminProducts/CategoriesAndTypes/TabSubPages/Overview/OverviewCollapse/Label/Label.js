import React from "react";

import { Button, Tooltip } from "antd";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {
  LabelName,
  LabelWraper,
  LabelContainer,
  LabelButtonGroupe,
} from "./Label.styled";

const Label = ({ children }) => {
  return (
    <LabelWraper>
      <LabelContainer>
        <LabelName>{children}</LabelName>
        <LabelButtonGroupe>
          <Tooltip title="Edit" placement="left">
            <Button>
              <ModeEditOutlineOutlinedIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Delete" placement="right">
            <Button>
              <DeleteOutlineOutlinedIcon />
            </Button>
          </Tooltip>
        </LabelButtonGroupe>
      </LabelContainer>
    </LabelWraper>
  );
};

export default Label;
