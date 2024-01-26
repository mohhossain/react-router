import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, cartCount, setCartCount }) {
  const navigate = useNavigate();
  function handleClick() {
    setCartCount(cartCount + 1);

    fetch("https://curious-plum-hourglass.glitch.me/cart-products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  function handleCardClick() {
    navigate("/products/" + product.id);
  }

  return (
    <div onClick={handleCardClick} className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="add-to-cart" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
