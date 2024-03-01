import React from "react";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";

function LandingPage() {
  return (
    <div>
      <Home />
      <ProductList />
      <ProductPage />
    </div>
  );
}

export default LandingPage;
