import React, { useContext, useEffect, useState } from 'react'
import ErrorMessage from '../../components/common/Error/ErrorMessage'
import Nav from '../../components/common/Nav/Nav'
import Spinner from '../../components/common/Spinner/Spinner'
import { FavoriteIdItemContext } from '../../contexts/FavoriteIdItemContext'
import useFetch from '../../hooks/useFetch'
import Product from '../ProductsPage/products/product'
import './favoritItemsList.css'

export default function FavoriteItemsPage() {
   const { idFavoriteItems } = useContext(FavoriteIdItemContext)
   const { isLoading, errorObj, getFetch } = useFetch()
   const [favItemData, setFavItemData] = useState([])

   // eslint-disable-next-line
   useEffect(() => { getFavoriteItemsList() }, [])

   async function getFavoriteItemsList() {
      for (let index = 0; index < idFavoriteItems.length; index++) {
         let data = await getFetch(`https://dummyjson.com/products/${idFavoriteItems[index]}`)
         setFavItemData((prev) => [...prev, data])
      }
   }

   return (
      <div className='favoriteItemsContainer'>
         <Nav />
         <div>
            <h2 className='headTitle'>FAVORIT PRODUCT LIST</h2>
            {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
            <div className='productList-conteiner'>
               <div className='productList'>
                  {isLoading && <div><Spinner /></div>}
                  {favItemData.length > 0
                     ? favItemData.map((item) => <Product key={item.id} item={item} />)
                     : <div className='messageEmptyList'>Favorit product list is empty...</div>}
               </div>
            </div>
         </div>
      </div >
   )
}
