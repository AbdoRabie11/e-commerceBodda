import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import {
  addToFavourite,
  removeProduct,
  setProduct,
} from "../redux/productsActions";

import { addToCart } from "../redux/productsActions";
const SingleProduct = () => {
  const [text, setText] = useState("Add");
  const product = useSelector((state) => state.single);
  const touchedProduct = useSelector(
    (state) => state.favouriteProducts.touched
  );

  const { images, title, price, category, description } = product;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const getSigleProduct = async (id) => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/api/v1/products/${id}`,
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTVmMDI1YThkYmExMWYyMzg3NjRhNSIsImlhdCI6MTY3MjA3Mjg5OCwiZXhwIjoxNjcyMjQ1Njk4fQ.7Jg23tgNb-Dw57y6HjoefEJJMzBtGNQS0782QLMThPU",
        },
      });
      dispatch(setProduct(response.data.data));
      console.log("====================================");
      console.log(response.data.data);
      console.log("====================================");
    };
    if (id) getSigleProduct(id);
    return () => {
      dispatch(removeProduct());
    };
  }, [id]);

  const addToCartFu = () => {
    dispatch(addToCart(product));
  };

  const addToFavouriteFunc = () => {
    dispatch(addToFavourite(product));
    changeText("remove");
  };
  const changeText = (text) => {
    setText(text);
  };
  return (
    <div className="container">
      <div className="row m-4">
        <div className="col-md-6">

         {images ?  <img
            src={"http://localhost:8000/storage/products/" + images[0]}
            className="card-img-top"
          /> : null}
        </div>
        <div className="col-md-6">
          <h3 className="display-6">{category}</h3>
          <p className="lean"> {description} </p>
          <h5>
            Price
            <span class="badge bg-secondary m-2"> {price} </span>
          </h5>
          <button type="button" class="btn btn-dark mt-3" onClick={addToCartFu}>
            Add To cart
          </button>
          <button
            type="button"
            class="btn btn-primary mx-4 mt-3"
            onClick={addToFavouriteFunc}
          >
            {text}
          </button>
          <button className="btn">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
