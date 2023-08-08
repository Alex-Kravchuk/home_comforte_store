import React from "react";

import { Form, Radio } from "antd";

import { formRules } from "../../../../../../../../../../helpers/formRules";

import {
  FormInput,
  FormLabel,
  FormDatePicker,
  FromSubmitButton,
  FormPasswordInput,
  FormItemInOneLineLeft,
  FormItemInOneLineRight,
} from "../../../../../../../../../../styles/formComponentStyles";

import {
  ANCFWrapper,
  ANCFCardIcon,
  ANCFContainer,
  ANCFCardIconContainer,
  ANCFTwoItemsContainer,
} from "./AddNewCardForm.styled";

import visa_icon from "../../../../../../../../../../assets/icons/visa-icon.png";
import mastercard_icon from "../../../../../../../../../../assets/icons/mastercard-icon.png";


const AddNewCardForm = ({ loading, onSubmitHandler }) => {
  const onlyNumbersHandler = (e) => {
    /**
     * This handler allows input
     * only numbers in the card 
     * number input filed
     */
    const { key, code } = e;

    if (code === "Space") {
      e.preventDefault();
      return;
    }

    if (isNaN(key) && key !== "Backspace") {
      e.preventDefault();
      return;
    }
  };

  return (
    <ANCFWrapper>
      <ANCFContainer>
        <Form name="newCard" layout="vertical" onFinish={onSubmitHandler}>
          <Form.Item
            name="number"
            label={<FormLabel>Card number</FormLabel>}
            rules={formRules.cardInput}
          >
            <FormInput
              placeholder="0000 0000 0000 0000"
              maxLength="16"
              onKeyDown={onlyNumbersHandler}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <ANCFTwoItemsContainer>
              <FormItemInOneLineLeft
                name="expiry"
                label={<FormLabel>Expiry date</FormLabel>}
                rules={formRules.normalInputField("card expiry date")}
              >
                <FormDatePicker placeholder="YYYY-MM" picker="month" />
              </FormItemInOneLineLeft>

              <FormItemInOneLineRight
                name="cvv"
                label={<FormLabel>CVC/CVV</FormLabel>}
                rules={formRules.cvvInput}
              >
                <FormPasswordInput
                  placeholder="***"
                  maxLength={3}
                  onKeyDown={onlyNumbersHandler}
                />
              </FormItemInOneLineRight>
            </ANCFTwoItemsContainer>
          </Form.Item>
          <Form.Item
            name="paymentsystem"
            rules={formRules.normalInputField("your card payment system")}
          >
            <Radio.Group style={{ width: "100%" }}>
              <Radio value="visa" style={{ width: "50%" }}>
                <ANCFCardIconContainer>
                  <ANCFCardIcon src={visa_icon} />
                </ANCFCardIconContainer>
              </Radio>
              <Radio value="mastercard">
                <ANCFCardIconContainer>
                  <ANCFCardIcon src={mastercard_icon} />
                </ANCFCardIconContainer>
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="cardholdername"
            label={<FormLabel>Cardholder name</FormLabel>}
            rules={formRules.normalInputField("cardholder name")}
          >
            <FormInput placeholder="Enter cardholder`s full name" />
          </Form.Item>
          <Form.Item>
            <FromSubmitButton
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
            >
              Add card
            </FromSubmitButton>
          </Form.Item>
        </Form>
      </ANCFContainer>
    </ANCFWrapper>
  );
};

export default AddNewCardForm;
