import { Route, Routes } from 'react-router-dom'
import './App.css'
import { FavoriteIdItemContextProvider } from './contexts/FavoriteIdItemContext'
import FavoriteItemsPage from './pages/FavoriteItemsPage/FavoriteItemsPage'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'



function App() {

   return (
      <div className="App">
         <Routes>
            <Route path='/' element={
               <FavoriteIdItemContextProvider>
                  <HomePage />
               </FavoriteIdItemContextProvider>
            } />
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
   )
}
export default App
