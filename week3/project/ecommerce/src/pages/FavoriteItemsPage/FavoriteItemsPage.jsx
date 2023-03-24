import React, { useContext, useState } from 'react'
import ErrorMessage from '../../components/common/Error/ErrorMessage'
import Nav from '../../components/common/Nav/Nav';
import Spinner from '../../components/common/Spinner/Spinner'
import { FavoriteIdItemContext } from '../../contexts/FavoriteIdItemContext';
import Product from '../ProductsPage/products/product';
import './favoritItemsList.css'

export default function FavoriteItemsPage() {
   const { idFavoriteItems } = useContext(FavoriteIdItemContext);
   const [isLoading, setIsLoading] = useState(false);
   const [errorObj, setErrorObj] = useState({ isError: false, message: '' })

   const [favItemData, setFavItemData] = useState([])


   useState(() => {
      for (let index = 0; index < idFavoriteItems.length; index++) {
         getFetch(`https://dummyjson.com/products/${idFavoriteItems[index]}`)

      }
   }, [])



   async function getFetch(url) {
      try {
         setIsLoading(true);
         setErrorObj({ isError: false, message: '' })
         const response = await fetch(url);
         const data = await response.json();
         setFavItemData((prev) => [...prev, data])
      }
      catch (error) {
         setErrorObj({ isError: true, message: error.message })
      }
      finally {
         setIsLoading(false);
      }
   }

   return (
      <div className='favoriteItemsContainer'>
         <Nav />
         <h2 className='headTitle'>FAVORIT PRODUCT LIST</h2>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         <div className='productList-conteiner'>
            <div className='productList'>
               {isLoading && <div><Spinner /></div>}
               {favItemData && favItemData.map((item) => <Product key={item.id} item={item} />)}
            </div>

         </div>
      </div >
   )
}
