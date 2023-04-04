
import React from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import ProductAllInfo from "./ProductInfoAll"
import useFetch from "./useFetchHook";

function ProductDetail () {
  const {id} = useParams();
  const {data: product, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  return (
    <div className="productDetail">
        {loading && <p className="loading">Loading</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <ProductAllInfo product={product} />}       
    </div>
  );
}

export default ProductDetail