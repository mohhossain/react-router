import React from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

function ProductList() {
  const { products } = useOutletContext();
  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
