import { useEffect, useState } from "react";
import { $authHost } from "../../api";

export const useAuth = () => {
  // const [auth, setAuth] = useState({
  //   isAuth: false,
  //   role: ["GUEST"],
  //   error: null,
  // });

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    console.log("inside useAuth", auth);
  }, [auth]);

  useEffect(() => {
    const checkAuth = async () => {
      console.log("before fetching", auth);

      try {
        const authResponse = await $authHost.get("api/user/auth/");

        setAuth(true);
      } catch (error) {
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  return auth;
};
