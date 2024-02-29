import React from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductList() {
  // const { products } = useOutletContext();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
