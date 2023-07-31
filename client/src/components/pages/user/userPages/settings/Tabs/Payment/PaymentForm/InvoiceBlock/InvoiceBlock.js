import React from "react";
import {
  PFBlock,
  PFCheckboxInfo,
  PFCheckboxLabel,
  PFFormItemGroupe,
  PFItemContainer,
  PFSubTitle,
  PFTitle,
  PFTitleBlock,
} from "../PaymentForm.styled";
import { Checkbox, Form } from "antd";
import { FormInput } from "../../../../../../../../../styles/formComponentStyles";
import { formRules } from "../../../../../../../../../helpers/formRules";

const InvoiceBlock = ({
  alternativeEmailRef,
  defaultEmailChecked,
  alternativeEmailChecked,
  defaultEmailHandler,
  alternativeEmailHandler,
}) => {
  return (
    <PFBlock>
      <PFTitleBlock>
        <PFTitle>Contact email</PFTitle>
        <PFSubTitle>Where should invoices be sent?</PFSubTitle>
      </PFTitleBlock>
      <PFFormItemGroupe>
        <PFItemContainer>
          <Checkbox
            checked={defaultEmailChecked}
            onChange={defaultEmailHandler}
          >
            <PFCheckboxLabel>Send to my account email</PFCheckboxLabel>
          </Checkbox>
          <PFCheckboxInfo>sodasoad450@gmail.com</PFCheckboxInfo>
        </PFItemContainer>

        <PFItemContainer>
          <Checkbox
            onChange={alternativeEmailHandler}
            checked={alternativeEmailChecked}
          >
            <PFCheckboxLabel>Send to an alternative email</PFCheckboxLabel>
          </Checkbox>
          <PFCheckboxInfo>
            <Form.Item
              name="alternativeEmail"
              rules={formRules.secondaryEmailInput(alternativeEmailChecked)}
            >
              <FormInput
                type="email"
                disabled={!alternativeEmailChecked}
                ref={alternativeEmailRef}
              />
            </Form.Item>
          </PFCheckboxInfo>
        </PFItemContainer>
      </PFFormItemGroupe>
    </PFBlock>
  );
};

export default InvoiceBlock;
