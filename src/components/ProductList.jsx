import React from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function ProductList() {
  const { products } = useOutletContext();

  

  console.log(products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
