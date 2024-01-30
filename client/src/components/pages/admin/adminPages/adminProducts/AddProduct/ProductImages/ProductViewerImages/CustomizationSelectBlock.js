import React, { useEffect, useState } from "react";

import { Select, Tooltip } from "antd";

import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import {
  NoDataContainer,
  PVIConentGroup,
  PVIContentColumn,
  PVIContentRow,
  PVISelectContainer,
  SelectLabelContainer,
} from "./ProductViewerImages.styled";
import CustomizationSelectRow from "./CustomizationSelectRow";

const CustomizationSelectBlock = ({
  saved,
  sizeLarge,
  saveHandler,
  customizationData,
  clearFileListHandler,
  optionsOnChangeHandler,
}) => {
  console.log("saved flag", saved);

  return (
    <PVISelectContainer saved={saved}>
      <PVIConentGroup>
        <PVIContentColumn>
          {customizationData.length === 0 && (
            <NoDataContainer>There is no customization data</NoDataContainer>
          )}
          {customizationData.map(({ name, items, noAffectToDisplay }) => (
            <CustomizationSelectRow
              name={name}
              items={items}
              sizeLarge={sizeLarge}
              noAffectToDisplay={noAffectToDisplay}
              optionsOnChangeHandler={optionsOnChangeHandler}
            />
          ))}
        </PVIContentColumn>
      </PVIConentGroup>

      {saved ? (
        <CheckCircleOutlineOutlinedIcon />
      ) : (
        <Tooltip title="Save">
          <AddTaskOutlinedIcon onClick={saveHandler} />
        </Tooltip>
      )}

      <Tooltip title="Clear filelist">
        <DeleteSweepOutlinedIcon onClick={() => clearFileListHandler(true)} />
      </Tooltip>
    </PVISelectContainer>
  );
};

export default CustomizationSelectBlock;
