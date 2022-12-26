import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { removeFromCart } from "../redux/productsActions";
import {FaHeart} from 'react-icons/fa'
const ProductCard = ({ product }) => {
  const { pathname } = useLocation();
  const isInCart = pathname.includes("cart");
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromCart(product._id));
  };

  return (
    <div className="card mt-3">
      <img
        src={"http://localhost:8000/storage/products/" + product.images[0]}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title"> {product.title} </h5>
        <p className="card-text">{product.description}</p>

        {isInCart ? (
          <button type="button" class="btn btn-dark mt-3" onClick={removeItem}>
          
            remove
          </button>
        ) : (
          <NavLink to={`/products/${product._id}`} className="btn btn-dark">
            Add to Cart
          </NavLink>
        )}

        {/* <NavLink to={`/products/${product.id}`} className="btn btn-dark">
        Add to Cart
        </NavLink> */}
      <button className="btn m-1">
        <FaHeart />
      </button>
      </div>
    </div>
  );
};

export default ProductCard;
