import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  console.log(id);

  const location = useLocation();
  console.log(location);

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="product-detail-page">
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="availability">{product.quantity} available</p>
          <p className="description">{product.description}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
