import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import SingleProductPage from './pages/SingleProductPage'



function App() {

   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/product/:itemId' element={<SingleProductPage />} />
         </Routes>
      </div>
   );
}

export default App;
