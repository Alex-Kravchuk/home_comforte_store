import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuth, setAuth] = useState({ auth: false, role: ["USER", "ADMIN"] });

  useEffect(() => {
    let timeoutID;
    const getUser = async () => {
      new Promise((res, rej) => {
        try {
          //   timeoutID = setTimeout(() => setAuth({ auth: false }), 0);
        } catch (error) {
          console.log("something went wrong", error);
        }
      });
    };

    getUser();

    return () => clearTimeout(timeoutID);
  });

  return isAuth;
};
