import "./App.css";
import { useState } from "react";
import CategoryList from "./components/category-list";
import ProductList from "./components/product-list";

function App() {
  const [category, setCategory] = useState("All products");
  // console.log(category);
  return (
    <div className="App">
      <h1>PRODUCTS</h1>
      <CategoryList setCategoryName={setCategory} />
      <ProductList activeCategory={category} />
    </div>
  );
}

export default App;
