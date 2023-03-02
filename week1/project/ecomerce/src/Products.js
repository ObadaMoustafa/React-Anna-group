import React from 'react'
import products from './fake-data/all-products'
import './App.css';

export default function Products() {
  return (
    <div>
         {products.map((product, id) => {
    return(
      <div key = {id}>
        <div className = "productDescription">
         <a href = ""><img src={product.image}></img></a>
          <a href=""><p className="description">{product.title}</p></a>
      </div>
      </div>
    )}
    )}
    </div>
  )
}
