import { useState } from 'react';
import './App.css';
import CategoryList from './components/categories';
import products from './fake-data/all-products';
import categories from './fake-data/all-categories';
import Products from './components/products';

function App () {
  const [state, setState] = useState({selectedCategory:'', isAll: true})
  return (
    <div className="App">
     <h1>
      Products
     </h1>
{
  CategoryList ({categories, state, setState})
}
{
  Products(products, state)
}
    </div>
  );
}

export default App;
