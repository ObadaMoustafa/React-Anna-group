import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';

export default function Nav() {
   return (
      <div className='nav'>
         <nav >
            <Link to='/'>
               <button className='navButton'>HOME</button>
            </Link>
            <Link to='/products'>
               <button className='navButton'>PRODUCT LIST</button>
            </Link>
            <Link to='/products/favorite'>
               <button className='navButton'>FAVORITE PRODUCTS</button>
            </Link>
         </nav>
      </div>
   )
}
