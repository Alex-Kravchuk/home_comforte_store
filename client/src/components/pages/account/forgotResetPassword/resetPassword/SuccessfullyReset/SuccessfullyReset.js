import React from "react";

import { Button, Result } from "antd";
import { Link } from "react-router-dom";

import {
  LOGIN_ROUTE,
  ACCOUNT_ROUTE,
} from "../../../../../../utils/routes_consts";

import { SFSButtonContainer } from "../../ForgotResetPassord.styled";

const SuccessfullyReset = () => {
  return (
    <Result
      status="success"
      title="Password changed successfully!"
      subTitle="Please log in with a new password."
      extra={[
        <SFSButtonContainer key={"logIn"}>
          <Link to={"/" + ACCOUNT_ROUTE + "/" + LOGIN_ROUTE}>
            <Button type="primary">Go to the log in page</Button>
          </Link>
        </SFSButtonContainer>,
      ]}
    />
  );
};

export default SuccessfullyReset;
