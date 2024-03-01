import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import Home from "./components/Home.jsx";
import LandingPage from "./components/LandingPage.jsx";
import ProductPage from "./components/ProductPage.jsx";

const Main = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/products",
          element: <ProductList />,
        },
        {
          path: "/cart",
          element: <h1>Cart</h1>,
        },
        {
          path: "/products/:id",
          element: <ProductPage />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>This page does not exist</h1>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
