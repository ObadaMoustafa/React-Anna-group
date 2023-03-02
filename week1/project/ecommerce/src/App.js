import './App.css';
import CategoriesList from './fake-data/all-categories'
import Categories from './components/categories'
import Products from './components/products'
import { useState } from 'react';

// const ProductTitle = Products.ProductTitle;
// const ProductImage = Products.ProductImage;

function App() {
   const [category, setCategory] = useState()
   // console.log(category)
   return (
      <div className="App">
         <h1 className='headTitle'>PRODUCTS</h1>
         <div className='categories-container'>
            <div className='categories'>
               {CategoriesList.map((category, index) => {
                  return (
                     <Categories name={category} key={index} ind={index} useStateFunction={setCategory} />
                  )
               })}
            </div>
         </div>
         <div className='productList-conteiner'>
            <ul className='productList'>
               <Products prodCategory={category} />
            </ul>
         </div>
      </div>
   );
}

export default App;
