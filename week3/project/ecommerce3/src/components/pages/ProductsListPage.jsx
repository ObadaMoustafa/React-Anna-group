import { useState } from "react";

import CategoryList from "../CategoryList";
import ProductList from "../ProductList";

function ProductsListPage() {
  const [selectedCategory, setCategory] = useState("All products");
  const pageTitle =
    selectedCategory !== "All products"
      ? `${selectedCategory} PRODUCTS`
      : "ALL PRODUCTS";

  return (
    <div>
      <h1>{pageTitle}</h1>
      <CategoryList
        setCategoryName={setCategory}
        activeCategory={selectedCategory}
      />
      <ProductList activeCategory={selectedCategory} />
    </div>
  );
}

export default ProductsListPage;
