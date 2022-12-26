import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <>
      {products.length > 0 &&
        products.map((product) => (
          <div className="col-md-4">
            <ProductCard key={product.name} product={product} />
          </div>
        ))}
    </>
  );
};

export default ProductList;