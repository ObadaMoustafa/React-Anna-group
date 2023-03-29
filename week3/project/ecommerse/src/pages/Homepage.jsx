import Category from "../components/Category";
import Products from "../components/Products";
import { useState } from "react";
// import { Navigation } from "./Navigation";
import '../components/Style/MainPage.css'
import "../components/Style/Navigation.css"

function Homepage() {
    const [category, setCategory] = useState('All');
    return (
      <div className="App">
       {/* <h1 className='title-container--title'>Products</h1> */}
        <Category choosedCategory={setCategory} />
        <Products activeCategory={category} /> 
        
      </div>
    
    );
   
  }
  
  export default Homepage;