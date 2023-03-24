import React from 'react'
import useFavoriteItems from '../../../hooks/useFavoriteItems';

export default function SingleProduct({ itemInfo }) {

   const { svgIcon, favoriteIdHandler } = useFavoriteItems(itemInfo.id)

   return (
      <div className='singleItemWrap'>
         <div className='singleItemTitle'>{itemInfo.title}</div>
         <div className='singleItemDiscription'>{itemInfo.description}</div>
         <div className='singleItemImgWrap'>
            {itemInfo.images && <img className='singleItemImage' src={itemInfo.images[0]} alt={itemInfo.title} />}
            <img className='singleItemHeart' src={svgIcon} alt='' onClick={() => { favoriteIdHandler(itemInfo.id) }} />
         </div>
      </div>
   )
}
