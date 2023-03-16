import React from 'react'
import './Style/products.css'
import {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';

export default function Products({activeCategory}) {
    

    const [prodData, setProdData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getProducts = 
    useCallback(
      async () => {
            const prom = (activeCategory !== 'All') ? await fetch(`https://fakestoreapi.com/products/category/${activeCategory}`) : await fetch(`https://fakestoreapi.com/products`)
            const data = await prom.json(); 
           
            setTimeout(() => {
              setIsLoading(false);
            }, 1000)
            setProdData(data)
          }, [activeCategory]
    )
        
    useEffect(() => {getProducts()}, [activeCategory, getProducts])
        
  function ListProduct({id, img, title}) {
 
    return(
      <div>
        <Link to = {`/oneproduct/${id}`}  key={id}>
        <li className='products'>
            <div className='wrapper'>
              <img className='product-image' src={img} alt="img"></img>
              <span className='product-title'>{title}</span>
            </div>
        </li>
        </Link>
  
        </div>
    );
}
  return ( 
    <div>
      {isLoading ? <div>Loading...</div> :
    <ul className='item-list'>
         {prodData.map((item) => {
          const{id, image, title} = item;
    return(
      <Link to={`/oneproduct/${id}`} key = {id}>
      <ListProduct key={id} title={title} img={image} id={id} />
      </Link>
    )}
    )}
    </ul>
}
    </div>
  )
}