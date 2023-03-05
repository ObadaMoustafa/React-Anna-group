import './App.css';
import Categories from './components/categories'
import Products from './components/products'
import { useState } from 'react';



function App() {
   const [category, setCategory] = useState('All items')
   return (
      <div className="App">
         <h1 className='headTitle'>PRODUCTS</h1>
         <Categories useStateFunction={setCategory} />
         <Products prodCategory={category} />
      </div>
   );
}

export default App;
