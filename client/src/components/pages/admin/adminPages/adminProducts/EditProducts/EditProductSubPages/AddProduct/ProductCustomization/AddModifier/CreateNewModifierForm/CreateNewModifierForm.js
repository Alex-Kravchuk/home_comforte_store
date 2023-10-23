import React from "react";

import { Form, Input, Select } from "antd";
import { FormInput } from "../../../../../../../../../../../styles/formComponentStyles";
import { FormLabel } from "@mui/material";
import { formRules } from "../../../../../../../../../../../helpers/formRules";

const CreateNewModifierForm = ({ form }) => {
  return (
    <Form form={form} name="modifier_form" layout="vertical">
      <Form.Item
        name="name"
        label={<FormLabel>Modifier name:</FormLabel>}
        rules={formRules.normalInputField("modifier name")}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name="displaymethod"
        label={<FormLabel>Modifier display method:</FormLabel>}
		rules={formRules.selectInput('display method')}
      >
        <Select
          size="large"
          options={[
            {
              value: "list",
              label: "List",
            },
            {
              value: "cell",
              label: "Cell",
            },
            {
              value: "tile",
              label: "Tile",
            },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default CreateNewModifierForm;
