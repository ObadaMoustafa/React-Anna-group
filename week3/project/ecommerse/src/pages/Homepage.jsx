import Category from "../components/Category";
import Products from "../components/Products";
import { useState } from "react";
import { Navigation } from "./Navigation";
import '../components/Style/MainPage.css'

function Homepage() {
    const [category, setCategory] = useState('All');
    return (
      <div className="App">
      
        <Category choosedCategory={setCategory} />
        <Products activeCategory={category} /> 
        
      </div>
    
    );
   
  }
  
  export default Homepage;