import React from "react";

function ProductAllInfo({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <div className="product-title">{product.title}</div>
        <div className="product-price">{product.price}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-category">{product.category}</div>
        <div className="product-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
      </div>
    </div>
  );
}

export default ProductAllInfo;
