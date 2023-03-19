import React from 'react'
import './Style/products.css'
import {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../pages/ErrorMessage';

export default function Products({activeCategory}) {
    

    const [prodData, setProdData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorObj, setErrorObj] = useState({ isError: false, message: '' })
      
    
      async function getProducts () {
        try {
          setIsLoading(true);
            const prom = (activeCategory !== 'All') ? await fetch(`https://fakestoreapi.com/products/category/${activeCategory}`) : await fetch(`https://fakestoreapi.com/products`)
            const data = await prom.json(); 
            setProdData(data);
          }
          catch(error) {
            setErrorObj({isError: true, message: error.message})
          }
          finally{
            setIsLoading(false);
          }
    
      }
    useEffect(() => {getProducts()}, [activeCategory, getProducts])
        
  function ListProduct({id, img, title}) {
 
    return(
      <div>
          {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
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
      <ListProduct key={id} title={title} img={image} id={id} />

    )}
    )}
    </ul>
}
    </div>
  )
}