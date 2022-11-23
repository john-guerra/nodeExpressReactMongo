import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import IndexPage from "./pages/IndexPage.js";
import AboutPage from "./pages/AboutPage.js";
import DonationsPage from "./pages/DonationsPage.js";
import ErrorPage from "./pages/ErrorPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage></IndexPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/donations",
    element: <DonationsPage></DonationsPage>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
