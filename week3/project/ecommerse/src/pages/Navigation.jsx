import React from 'react'
import { Link } from 'react-router-dom';
import Favorite  from "../components/FavoriteProducts";

export const Navigation = () => {
  return (
          <div className="headerPage">
        <h1>Products</h1>
        <div className='headerLinks'>
        <Link to = "/" className='productsLink'> <p>Products</p> </Link>
        <Link to = "/Favorite"><p>Favourite</p></Link>
        </div>
        
        </div>
  )
}
