import React from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

function ProductList() {
  const { products, setCartCount, cartCount } = useOutletContext();
  console.log(products);
  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setCartCount={setCartCount}
            cartCount={cartCount}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
