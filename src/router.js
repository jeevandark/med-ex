import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// build the router
const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// export
export { router };
