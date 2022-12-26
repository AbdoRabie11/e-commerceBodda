import React, { useEffect } from "react";
import products from "../dummy/data";
import ProductList from "./ProductList";
import axios from "axios";
import { setProducts } from "../redux/productsActions";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: "http://localhost:8000/api/v1/products",
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTVmMDI1YThkYmExMWYyMzg3NjRhNSIsImlhdCI6MTY3MjA3Mjg5OCwiZXhwIjoxNjcyMjQ1Njk4fQ.7Jg23tgNb-Dw57y6HjoefEJJMzBtGNQS0782QLMThPU",
        },
      }).catch((err) => console.log(err));
      dispatch(setProducts(response.data.data));
    };
    getProducts();
  }, []);

  const productss = useSelector((store) => store.allProducts.products);
  console.log('====================================');
  console.log(productss);
  console.log('====================================');
  return (
    <>
      <div className="container">
        <div className="row">
          <ProductList products={productss} />
        </div>
      </div>
    </>
  );
};

export default Products;
