import "./App.css";
import { useState } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  const [selectedCategory, setCategory] = useState("All products");
  // console.log(category);
  return (
    <div className="App">
      <h1>PRODUCTS</h1>
      <CategoryList
        setCategoryName={setCategory}
        activeCategory={selectedCategory}
      />
      <ProductList activeCategory={selectedCategory} />
    </div>
  );
}

export default App;
