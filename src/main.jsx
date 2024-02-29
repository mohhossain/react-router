import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
