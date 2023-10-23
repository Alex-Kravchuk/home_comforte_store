import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import {
  ModifierTitleContainer,
  ModifierTitleWrapper,
  TitlePart,
  TitlePartGroupe,
} from "./ModifierTitle.styled";
import { Popconfirm, Tooltip } from "antd";

const ModifierTitle = ({ name, displaymethod, id, deleteHandler }) => {
  const stopPropagationHandler = (e) => e.stopPropagation();
  return (
    <ModifierTitleWrapper>
      <ModifierTitleContainer>
        <TitlePart>{name}</TitlePart>
        <TitlePartGroupe>
          <Popconfirm
            onClick={stopPropagationHandler}
            title="Delete modifier"
            description="Are you sure to delete this modifier?"
            onConfirm={() => deleteHandler(id)}
            placement="left"
            onCancel={stopPropagationHandler}
            okText="Yes"
            cancelText="No"
          >
            <TitlePart>
              <DeleteOutlineOutlinedIcon />
            </TitlePart>
          </Popconfirm>

          <TitlePart>{displaymethod}</TitlePart>
        </TitlePartGroupe>
      </ModifierTitleContainer>
    </ModifierTitleWrapper>
  );
};

export default ModifierTitle;
