import jwt_decode from "jwt-decode";

import { $authHost, $host } from "..";

// TODO 
// написати якийсь клас чи шо для обробки помилок на клієнті

export const logInAsGuest = async () => {
  try {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (!tokenFromLocalStorage) {
      const response = await $host.post("api/guest/create/");
      if (response.data.token) {
        localStorage.setItem("guest_token", response.data.token);
      }
      return jwt_decode(response.data.token);
    } else {
      return jwt_decode(tokenFromLocalStorage);
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

export const userSignUp = async (email, password, name, lastname) => {
  try {
    const response = await $host.post("api/user/signup/", {
      email,
      name,
      password,
      lastname,
    });

    if (response.data.token) {
      localStorage.setItem("user_token", response.data.token);
      localStorage.removeItem("guest_token");

      return jwt_decode(response.data.token);
    } else {
      throw new Error("Something wrong with request");
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
