import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
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
