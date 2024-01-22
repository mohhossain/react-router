import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Error from "./Error";
import ProductList from "./components/ProductList.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App user={user} />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <ProductList />,
        },
        {
          path: "/login",
          element: <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />,
        },
        {
          path: "/cart",
          element: isLoggedIn ? (
            <Cart />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} />
          ),
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
