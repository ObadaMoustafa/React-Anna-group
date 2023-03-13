import { useState } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

function ProductsPage() {
  const [selectedCategory, setCategory] = useState("All products");
  // console.log(category);
  return (
    <div>
      <h1>PRODUCTS</h1>
      <CategoryList
        setCategoryName={setCategory}
        activeCategory={selectedCategory}
      />
      <ProductList activeCategory={selectedCategory} />
    </div>
  );
}

export default ProductsPage;
