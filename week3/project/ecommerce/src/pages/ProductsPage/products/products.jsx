import Product from './product'
import React, { useEffect } from 'react'
import ErrorMessage from '../../../components/common/Error/ErrorMessage'
import '../css/product.css'
import Spinner from '../../../components/common/Spinner/Spinner'
import useFetch from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'


function Products({ prodCategory }) {

   const { data, isLoading, errorObj, getFetch } = useFetch()
   const url = (prodCategory !== 'All items')
      ? `https://dummyjson.com/products/category/${prodCategory}`
      : 'https://dummyjson.com/products';

   // eslint-disable-next-line
   useEffect(() => { getFetch(url) }, [prodCategory])

   const productList = data.products;

   return (
      <div>
         <Link to='/products/favorite'>Go to favorite</Link>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         <div className='productList-conteiner'>
            <div className='productList'>
               {isLoading && <div><Spinner /></div>}
               {productList && productList.map((item) => <Product key={item.id} item={item} />)}
            </div>
         </div >
      </div>
   )
}

export default Products