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

const CustomizationSelectBlock = ({
  saved,
  sizeLarge,
  saveHandler,
  customizationData,
  clearFileListHandler,
  optionsOnChangeHandler,
}) => {

  console.log('saved flag', saved);
  
  return (
    <PVISelectContainer saved={saved}>
      <PVIConentGroup>
        <PVIContentColumn>
          {customizationData.length === 0 && (
            <NoDataContainer>There is no customization data</NoDataContainer>
          )}
          {customizationData.map(({ name, items }) => (
            <PVIContentRow key={name}>
              <div>{name}</div>
              <Select
                onChange={(value) => optionsOnChangeHandler(name, value)}
                defaultValue={{
                  value: items.find((item) => item.defaultMarker),
                  label: (
                    <SelectLabelContainer>
                      <span>
                        {items.find((item) => item.defaultMarker).title}
                      </span>
                      <span>
                        {items.find((item) => item.defaultMarker).defaultMarker
                          ? "default"
                          : ""}
                      </span>
                    </SelectLabelContainer>
                  ),
                }}
                placeholder="Choose customization option"
                size={sizeLarge ? "large" : "medium"}
                options={items.map((item) => ({
                  value: item.title,
                  label: (
                    <SelectLabelContainer>
                      <span>{item.title}</span>
                      <span>{item.defaultMarker ? "default" : ""}</span>
                    </SelectLabelContainer>
                  ),
                }))}
              />
            </PVIContentRow>
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
