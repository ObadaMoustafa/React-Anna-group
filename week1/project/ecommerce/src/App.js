import { useState } from 'react';
import './App.css';
import CategoryList from './fake-data/all-categories';
import categories from './components/categories';
import products from './components/products';
import ProductsList from './fake-data/all-products';

function App() {
  const [state, setState] = useState({selectedCategory:'', isAll: true})
  return (
    <div className="App">
      <h1>
        Products
      </h1>
      { CategoryList({categories, state, setState}) }
      { ProductsList({products, state}) }
    </div>
  );
}

export default App;
