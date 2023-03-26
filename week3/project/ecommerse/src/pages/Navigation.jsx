import React from 'react'
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
          <div className="headerPage">
        <h1>Products</h1>
        {/* <div className='headerLinks'> */}
        <Link to = "/" className='productsLink'> <p>Products</p> </Link>
        <Link to = "../components/FavoriteProducts.jsx"><p>Favovourite</p></Link>
        {/* </div> */}
        
        </div>
  )
}
