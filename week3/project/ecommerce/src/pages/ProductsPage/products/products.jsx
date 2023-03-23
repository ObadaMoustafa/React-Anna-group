import Product from './product'
import React, { useEffect, useContext } from 'react'
import ErrorMessage from '../../../components/common/Error/ErrorMessage'
import '../css/product.css'
import Spinner from '../../../components/common/Spinner/Spinner'
import useFetch from '../../../hooks/useFetch'
import { FavoriteIdItemContext } from '../../../contexts/FavoriteIdItemContext';


function Products({ prodCategory }) {
   const { idFavoriteItem } = useContext(FavoriteIdItemContext);
   console.log(idFavoriteItem);

   const { data, isLoading, errorObj, getFetch } = useFetch()
   const url = (prodCategory !== 'All items')
      ? `https://dummyjson.com/products/category/${prodCategory}`
      : 'https://dummyjson.com/products';

   // eslint-disable-next-line
   useEffect(() => { getFetch(url) }, [prodCategory])

   const productList = data.products;

   return (
      <div>
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