import { useState } from 'react';
import './App.css';
import categories from './fake-data/all-categories';
import products from './fake-data/all-products';
import CategoryList from './components/categories';
import ProductsList from './components/products';

function App() {
  const [state, setState] = useState({pickCategory:'',itsEver: true})
  return (
    <div className="App">
      <h1>Products</h1>
      { CategoryList({categories, state, setState}) }
      { ProductsList({products, state}) }
    </div>
  );
}

export default App;
