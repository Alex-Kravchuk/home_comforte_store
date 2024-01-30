import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import {
  CheckboxContainer,
  ModifierTitleContainer,
  ModifierTitleLeftContainer,
  ModifierTitleWrapper,
  TitlePart,
  TitlePartGroupe,
} from "./ModifierTitle.styled";
import { Checkbox, Popconfirm } from "antd";

const ModifierTitle = ({
  id,
  name,
  displaymethod,
  deleteHandler,
  displayAffectHandler,
}) => {
  const stopPropagationHandler = (e) => e.stopPropagation();
  return (
    <ModifierTitleWrapper>
      <ModifierTitleContainer>
        <ModifierTitleLeftContainer>
          <TitlePart>{name}</TitlePart>
          <CheckboxContainer onClick={stopPropagationHandler}>
            <span>do not affect the display of product</span>
            <Checkbox onChange={(e) => displayAffectHandler(id, e.target.checked)} />
          </CheckboxContainer>
        </ModifierTitleLeftContainer>

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
