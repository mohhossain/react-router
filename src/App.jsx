import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import { Outlet } from "react-router-dom";

import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <p>Above the outlet</p>
        <Outlet context={{ products }} />
        <p>Below the outlet</p>
      </div>

      <h1>Footer</h1>
    </div>
  );
}

export default App;
