import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart-products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Cart;
