import React from "react";
import "./categories.css";

function Categories({categories, selectedCategory, handleCategoryClick}) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
      <button onClick={() => handleCategoryClick("")}>All Products</button>
    </div>
  );
}


export default Categories;