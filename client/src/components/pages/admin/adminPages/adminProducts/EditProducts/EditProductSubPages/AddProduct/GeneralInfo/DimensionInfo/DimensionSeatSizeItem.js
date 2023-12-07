import React, { useEffect, useState } from "react";

import { Tooltip } from "antd";

import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import { DIInput, DILabelContainer } from "./DimensionInfo.styled";
import {
  SeatSizeInfoBlock,
  SeatSizeInfoBlockLeft,
  SeatSizeInfoBlockRight,
} from "../../../../../../../../product/Demonstration/ProductDetails/SeatSize/SeatSize.styled";

const DimensionSeatSizeItem = ({ item, setDataHandler, dimensionsData }) => {
  const [modifiedItem, setItem] = useState({});
  const [details, setDetails] = useState(Boolean(item.details));

  const [saved, setSaved] = useState(false);
  const [labelError, setLabelError] = useState(false);
  const [valueError, setValueError] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, [modifiedItem]);

  useEffect(() => {
    const copyItem = Object.assign(item, {});
    setItem(copyItem);
  }, []);

  const addDetailsHandler = () => {
    setDetails(true);
  };

  const removeDetailsHandler = () => {
    setItem((state) => ({ ...state, details: "" }));
    setDetails(false);
  };

  const labelInputOnChange = (e) => {
    setItem((state) => ({ ...state, label: e.target.value }));
    setLabelError(false);
  };
  const detailsInputOnChange = (e) => {
    setItem((state) => ({ ...state, details: e.target.value }));
  };
  const valueInputOnChange = (e) => {
    setItem((state) => ({ ...state, value: e.target.value }));
    setValueError(false);
  };

  const saveItemHandler = () => {
    if (modifiedItem.value && modifiedItem.label) {
      setSaved(true);
      setValueError(false);
      setLabelError(false);

      // in code below we find element with the same ID
      // it can be beacuse we add a new empty modifier in another component
      // so here we find and change it item for corret item with data and id
      const suchItemIsExist = dimensionsData.findIndex(
        (item) => item.id === modifiedItem.id
      );
      const dataCopy = Object.assign([], dimensionsData);

      if (suchItemIsExist >= 0) {
        dataCopy.splice(suchItemIsExist, 1, modifiedItem);
        setDataHandler(dataCopy);
      } else {
        setDataHandler((state) => [...state, modifiedItem]);
      }
      return;
    }

    if (!modifiedItem.value) {
      setValueError(true);
    }
    if (!modifiedItem.label) {
      setLabelError(true);
    }
  };

  return (
    <SeatSizeInfoBlock>
      <SeatSizeInfoBlockLeft>
        <DILabelContainer>
          <DIInput
            onChange={labelInputOnChange}
            placeholder="Dimension label"
            defaultValue={item.label}
            status={labelError && "error"}
          />

          <Tooltip
            title={details ? "Remove the details" : "Add the details"}
            placement="top"
          >
            {details ? (
              <RemoveCircleOutlineOutlinedIcon onClick={removeDetailsHandler} />
            ) : (
              <AddCircleOutlineOutlinedIcon onClick={addDetailsHandler} />
            )}
          </Tooltip>
        </DILabelContainer>

        {details && (
          <DIInput
            placeholder="Label details"
            defaultValue={item.details}
            onChange={detailsInputOnChange}
          />
        )}
      </SeatSizeInfoBlockLeft>
      <SeatSizeInfoBlockRight saved={saved}>
        <DIInput
          onChange={valueInputOnChange}
          placeholder="Dimension value"
          defaultValue={item.value}
          status={valueError && "error"}
        />
        {saved ? (
          <CheckCircleOutlineOutlinedIcon />
        ) : (
          <AddTaskOutlinedIcon onClick={saveItemHandler} />
        )}
      </SeatSizeInfoBlockRight>
    </SeatSizeInfoBlock>
  );
};

export default DimensionSeatSizeItem;
