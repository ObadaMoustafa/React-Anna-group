import './App.css';
import Categories from './components/categories'
import Products from './components/products'
import { useState } from 'react';



function App() {
   const [category, setCategory] = useState('All items')
   console.log(category)
   return (
      <div className="App">
         <h1 className='headTitle'>PRODUCTS</h1>
         <div className='categories-container'>
            <div className='categories'>
               <Categories useStateFunction={setCategory} />
            </div>
         </div>
         <div className='productList-conteiner'>
            <div className='productList'>
               <Products prodCategory={category} />
            </div>
         </div>
      </div>
   );
}

export default App;
