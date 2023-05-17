import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/routes_consts";
import { useAuth } from "../../../hooks/userApi/useAuth";

const Basket = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate(HOME_ROUTE);
    }
  }, []);

  return <div>Basket page</div>;
};

export default Basket;
