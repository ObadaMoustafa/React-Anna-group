import "./App.css";
import { useState } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

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
