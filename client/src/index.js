import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// document.body.ontouchmove = (e) => {
//   e.preventDefault();
//   return false;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  //  </React.StrictMode>
);
