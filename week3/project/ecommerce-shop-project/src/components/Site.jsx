import React, { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import useCategories from "./useCategories.js"
import useProducts from "./useProducts.js"
// import { Link } from "react-router-dom";
// import ProductDetail from "./ProductDetail";
// import Product from "./Product";


function SiteWorking() {
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const {categories, loading: categoriesLoading, error:categoriesError} =
      useCategories();
    const {products, loading: productsLoading, error: productsError} =
      useProducts();

  const handleCategoryClick = (category) => {
    console.log(`Clicked category: ${category}`);
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
      />
      {categoriesLoading && <p>Loading...</p>}
      {categoriesError && <p>{categoriesError}</p>}
      {!categoriesLoading && !categoriesError && (
        <Products 
          products={products}
          selectedCategory={selectedCategory}
          loading={productsLoading}
          error={productsError}
        />
      )}
    </div>
  );
}

export default SiteWorking;
