import React, { useState } from 'react'
import Categories from './categories/categories'
import Products from './products/products'
// import { FavoriteIdItemContextProvider } from '../../contexts/FavoriteIdItemContext'


export default function ProductsPage() {
   const [category, setCategory] = useState('All items')

   const handlerCategoryClick = (event) => {
      setCategory(event);
   }

   return (
      <div>
         <h2 className='headTitle'>PRODUCTS</h2>
         <Categories onClick={handlerCategoryClick} activeCategory={category} />
         {/* <FavoriteIdItemContextProvider> */}
         <Products prodCategory={category} />
         {/* </FavoriteIdItemContextProvider> */}
      </div>
   )
}
