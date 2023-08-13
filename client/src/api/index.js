import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

// const $adminHost = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   withCredentials: true,
// });

const authReqInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("user_token")}`;
  return config;
};

$authHost.interceptors.request.use(authReqInterceptor);

$authHost.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    try {
      if (error.response.status === 401) {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}api/user/refresh`,
          { withCredentials: true }
        );
        localStorage.setItem("user_token", response.data.accessToken);
        return $authHost.request(originalRequest);
      }
    } catch (er) {
      console.log("Something went wrong", error);
      throw new Error(er);
    }
  }
);

export { $host, $authHost };
