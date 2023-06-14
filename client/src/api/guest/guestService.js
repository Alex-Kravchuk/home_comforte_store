import jwt_decode from "jwt-decode";

import { $host } from "..";

export class guestService {
  static loginAsGuest = async () => {
    // TODO
    // До того моменту поки гість валідний пам'ятати його корзину і т.д.

    try {
      const userTokenFromLocalStorage = localStorage.getItem("user_token");
      if (userTokenFromLocalStorage) {
        return null;
      }

      const guestTokenFromLocalStorage = localStorage.getItem("guest_token");
      const response = await $host.post("api/guest/create/", {
        token: guestTokenFromLocalStorage, 
      });

      localStorage.setItem("guest_token", response.data.token);

      return jwt_decode(response.data.token);

    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  static deleteGuest = async () => {
    try {
      const guestTokenFromLocalStorage = localStorage.getItem("guest_token");

      if (!guestTokenFromLocalStorage) {
        throw new Error({ message: "Cannot remove guest token" });
      }

      const response = await $host.post("api/guest/delete/", {
        token: guestTokenFromLocalStorage,
      });

      // TODO
      // some error

      return null;
    } catch (error) {
      console.log("Something went wrong", error.response.data);
    }
  };
}
