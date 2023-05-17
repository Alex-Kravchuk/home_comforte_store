import jwt_decode from "jwt-decode";

import { $authHost, $host } from "..";

export const firstLogin = async () => {
  try {
    const tokenFromLocalStorage = localStorage.getItem("token");

    if (!tokenFromLocalStorage) {
      const response = await $host.post("api/user/first_login/");
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return jwt_decode(response.data.token);
    } else {
      return jwt_decode(tokenFromLocalStorage);
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
