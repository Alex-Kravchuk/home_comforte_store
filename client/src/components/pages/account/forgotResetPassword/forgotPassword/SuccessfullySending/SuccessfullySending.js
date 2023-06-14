import React from "react";

import { Button, Result } from "antd";
import { Link } from "react-router-dom";

import { HOME_ROUTE } from "../../../../../../utils/routes_consts";

import { SFSButtonContainer } from "../../ForgotResetPassord.styled";

const SuccessfullySending = () => {
  return (
    <Result
      status="success"
      title="Password reset email successfully sent!"
      subTitle="Check your email and follow the instructions. The password reset link is active for 60 minutes."
      extra={[
        <SFSButtonContainer key="home">
          <Link to={HOME_ROUTE}>
            <Button type="primary">Go to the main page</Button>
          </Link>
        </SFSButtonContainer>,
      ]}
    />
  );
};

export default SuccessfullySending;
