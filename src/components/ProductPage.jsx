import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h1>Item details</h1>
      <img src={product.image} />
      <h2>{product.name}</h2>
      <p>Brand: {product.brand}</p>
      <p>Description: {product.description}</p>
      <p>Available quantity: {product.quantity}</p>
      <p>Rating: {product.rating}/5</p>
    </div>
  );
}

export default ProductPage;
