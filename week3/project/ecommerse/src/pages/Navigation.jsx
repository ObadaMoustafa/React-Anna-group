import React from 'react'
import { Link } from 'react-router-dom';
import Favorite  from "../components/FavoriteProducts";
import "../components/Style/Navigation.css"

export const Navigation = () => {
  return (
          <div className="title-container">
        {/* <h1 className='title-container--title'>Products</h1> */}
        <div className='nav'>
        <Link to = "/" className='nav-link'> <p>Products</p> </Link>
        <Link to = "/Favorite" className='nav-link'><p>Favourite</p></Link>
        </div>
        
        </div>
  )
}
