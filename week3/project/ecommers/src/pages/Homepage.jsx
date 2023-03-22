import Category from "../components/Category";
import Products from "../components/Products";
import { useState } from "react";

function Homepage() {
    const [category, setCategory] = useState('All');
    return (
      <div className="App">
        <h1>Products</h1>
        <Category choosedCategory={setCategory} />
        <Products activeCategory={category} /> 
        
      </div>
    
    );
   
  }
  
  export default Homepage;
  