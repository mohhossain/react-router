import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  function handleClick() {
    console.log(product.id);
    navigate("/products/" + product.id, { state: { product: "product" } });
  }

  return (
    <div onClick={handleClick} className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-card-details">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
