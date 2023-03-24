import React, { useState } from 'react'
import Nav from '../../components/common/Nav/Nav'
import Categories from './categories/categories'
import Products from './products/products'

export default function ProductsPage() {
   const [category, setCategory] = useState('All items')

   const handlerCategoryClick = (event) => {
      event === category ? setCategory('All items') : setCategory(event);
   }

   return (
      <div>
         <Nav />
         <h2 className='headTitle'>PRODUCTS</h2>
         <Categories onClick={handlerCategoryClick} activeCategory={category} />
         <Products prodCategory={category} />
      </div>
   )
}
