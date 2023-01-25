import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/routes_consts";

const Basket = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate(HOME_ROUTE);
    }
  }, []);
  return <div>Basket page</div>;
};

export default Basket;
