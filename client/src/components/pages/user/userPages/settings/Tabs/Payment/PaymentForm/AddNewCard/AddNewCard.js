import React, { useState } from "react";

import moment from "moment";
import { message } from "antd";
import AddCardIcon from "@mui/icons-material/AddCard";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import AddNewCardForm from "./AddNewCardForm/AddNewCardForm";

import {
  ANCText,
  ANCContainer,
  ANCAddContainer,
  ANCModalWrapper,
  ANCHideContainer,
} from "./AddNewCard.styled";

import { messageStyleConfig } from "../../../../../../../../../styles/globalStyles";

const AddNewCard = ({ cards, addNewCardHandler }) => {
  const [formIsVisible, setVisibleForm] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const showAddNewCardForm = () => {
    setVisibleForm(true);
  };

  const closeAddNewCardForm = () => {
    setVisibleForm(false);
  };

  const addNewCardHandlerSubmit = (values) => {
    const suchCardAlreadyAdded = cards.find(
      (card) => card.number === values.number
    );

    if (suchCardAlreadyAdded) {
      messageApi.open({
        type: "error",
        content: "Such a card already exists",
        style: messageStyleConfig,
      });

      return;
    }

    const cardData = {
      ...values,
      expiry: moment(values.expiry.$d).format("YYYY/MM"),
      id: cards.length + 1,
    };

    addNewCardHandler((state) => [...state, cardData]);
    setVisibleForm(false);
    messageApi.open({
      type: "success",
      content: "Card added successfully",
      style: messageStyleConfig,
    });
  };

  return (
    <ANCModalWrapper>
      <ANCContainer>
        {contextHolder}
        {formIsVisible ? (
          <ANCHideContainer onClick={closeAddNewCardForm}>
            <CancelOutlinedIcon />
            <ANCText>Hide form</ANCText>
          </ANCHideContainer>
        ) : (
          <ANCAddContainer onClick={showAddNewCardForm}>
            <AddCardIcon />
            <ANCText>Add a new card</ANCText>
          </ANCAddContainer>
        )}
      </ANCContainer>
      {formIsVisible && (
        <AddNewCardForm onSubmitHandler={addNewCardHandlerSubmit} />
      )}
    </ANCModalWrapper>
  );
};

export default AddNewCard;
