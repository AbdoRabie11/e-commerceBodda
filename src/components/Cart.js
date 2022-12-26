import React from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const Cart = () => {
  const productInCart = useSelector((state) => state.cartProducts.cart);
  const total = useSelector((state) => state.cartProducts.total)
  return (
    <div className="container">
      <div className="row">
        <ProductList products={productInCart} />
      </div>
      
        <div className="text-center mt-4 total">
        Total   {total}
        </div>
    </div>
  );
};

export default Cart;
