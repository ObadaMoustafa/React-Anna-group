import {useState} from 'react';
import Category from './components/Category';
import Products from './components/Products';
import './App.css';

function App() {
  const [category, setCategory] = useState('All');
  return (
    <div className="App">
      <h1>Products</h1>
      <Category useStateCategory={setCategory} />
      <Products activeCategory={category} /> 
    </div>
  );
}

export default App;
