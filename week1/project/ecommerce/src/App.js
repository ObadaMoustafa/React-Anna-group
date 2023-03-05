import './App.css';
import Categories from './components/productList/categories'
import Products from './components/productList/products'
import { useState } from 'react';



function App() {
   const [category, setCategory] = useState('All items')
   return (
      <div className="App">
         <h2 className='headTitle'>PRODUCTS</h2>
         <Categories useStateFunction={setCategory} />
         <Products prodCategory={category} />
      </div>
   );
}

export default App;
