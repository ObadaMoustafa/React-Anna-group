import React from 'react'

export default function SingleProduct({ itemInfo }) {

   return (
      <div className='singleItemWrap'>
         <div className='singleItemTitle'>{itemInfo.title}</div>
         <div className='singleItemDiscription'>{itemInfo.description}</div>
         {itemInfo.images && <img className='singleItemImage' src={itemInfo.images[0]} alt={itemInfo.title} />}
      </div>
   )
}
