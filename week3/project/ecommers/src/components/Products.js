import React from 'react'
import './Style/products.css'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../pages/ErrorMessage';

export default function Products({activeCategory}) {
    

    const [prodData, setProdData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorObj, setErrorObj] = useState({ isError: false, message: '' })
      
    
      async function getProducts () {
        try {
          setIsLoading(true);
            const prom = (activeCategory !== 'All') ? await fetch(`https://dummyjson.com/products/category/${activeCategory}`) : await fetch(`https://dummyjson.com/products/`)
            const data = await prom.json(); 
            setProdData(data.products);
          }
          catch(error) {
            setErrorObj({isError: true, message: error.message})
          }
          finally{
            setIsLoading(false);
          }
    
      }
    useEffect(() => {getProducts(activeCategory)}, [activeCategory])
        
  function Product({id, img, title}) {
 
    return(
      <>
          {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
          <div className='wrapper'>
        <Link to = {`/oneproduct/${id}`}  key={id}>
        <li className='products'>
            {/* <div className='wrapper'> */}
              <img className='product-image' src={img} alt="img"></img>
              <span className='product-title'>{title}</span>
            {/* </div> */}
        </li>
        </Link>
        </div>
  
        </>
    );
}
  return ( 
    <div>
      {isLoading ? <div>Loading...</div> :
    <ul className='item-list'>
         { prodData.map((item) => {
          const{id, images, title} = item;
    return(
      <Product key={id} title={title} img={images[0]} id={item.id} />

    )}
    )}
    </ul>
}
    </div>
  )
}