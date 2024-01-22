import React from "react";

function ProductCard({ product, cartCount, setCartCount }) {
  function handleClick() {
    setCartCount(cartCount + 1);

    fetch("http://localhost:3000/cart-products", {
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
  return (
    <div className="product-card">
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
