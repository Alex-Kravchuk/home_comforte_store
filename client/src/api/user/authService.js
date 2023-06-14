import jwt_decode from "jwt-decode";

import { $authHost, $host } from "..";
import axios from "axios";

// TODO
// написати якийсь клас чи шо для обробки помилок на клієнті

export class AuthService {
  static signup = async ({ email, password, name, lastname }) => {
    const response = await $host.post("api/user/signup/", {
      email,
      name,
      password,
      lastname,
    });

    if (response.data.accessToken) {
      localStorage.setItem("user_token", response.data.accessToken);
      localStorage.removeItem("guest_token");

      return response.data.user;
    } else {
      throw new Error("Something wrong with request");
    }
  };

  static login = async ({ email, password }) => {
    const response = await $host.post("api/user/login/", { email, password });
    localStorage.setItem("user_token", response.data.accessToken);

    return response.data.user;
  };

  static logout = async () => {
      localStorage.removeItem("user_token");
      const response = await $host.get("api/user/logout/");
      return response;
  };

  static loginWithToken = async () => {
      const userTokenFromLocalStorage = localStorage.getItem("user_token");
      if (!userTokenFromLocalStorage) {
        return null;
      }

      const authResponse = await $authHost.get("api/user/auth/");
      localStorage.setItem("user_token", authResponse.data.accessToken);

      return authResponse.data.user;
  };

  static forgotPassword = async ({ email }) => {
    const response = await $host.post("api/user/forgot-password/", { email });
    return response;
  };

  static resetPassword = async ({ token, userId, password }) => {
    const response = await $host.post("api/user/reset-password/", {
      token,
      userId,
      password,
    });
    return response;
  };
}

// TODO check auth wiht default axios instance
