import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { fetchFavorites } from "../redux/favouriteReducer";

const FavoritePage = () => {
  // const products = useSelector((state) => state.favouriteProducts.products);

  useEffect(() => {
    fetchFavorites()
  }, [])

  return (
    <div className="container">
      <div className="row">
        {/* <ProductList products={products} /> */}
      </div>
    </div>
  );
};

export default FavoritePage;
