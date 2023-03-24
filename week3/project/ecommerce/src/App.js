import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import FavoriteItemsPage from './pages/FavoriteItemsPage/FavoriteItemsPage';
import { FavoriteIdItemContextProvider } from './contexts/FavoriteIdItemContext'



function App() {

   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={
               <FavoriteIdItemContextProvider>
                  <ProductsPage />
               </FavoriteIdItemContextProvider>
            } />
            <Route path='/products/product/:itemId' element={
               <FavoriteIdItemContextProvider>
                  <SingleProductPage />
               </FavoriteIdItemContextProvider>
            } />
            <Route path='/products/favorite' element={
               <FavoriteIdItemContextProvider>
                  < FavoriteItemsPage />
               </FavoriteIdItemContextProvider>
            } />
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </div>
   );
}
export default App;
