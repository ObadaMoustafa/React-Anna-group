import React from 'react'
import './Style/products.css'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../pages/ErrorMessage';
import {ReactComponent as EmptyHeart} from './img/heart-regular.svg'
import {ReactComponent as FullHeart} from './img/heart-solid.svg'
import { useFavorite } from './FavouriteProductsContext';

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
    const [favorite, setFavorite] = useFavorite();
    const isFavorited = favorite.includes(id);
    // console.log(product.id)
    // console.log(id)
    const onFavoriteClick = () => {
        if (isFavorited) {
            setFavorite(favorite.filter((id) => id !== id));
        } else {
            setFavorite([...favorite, id]);
        }
       
    }
//   console.log('product page', favorite)
    return(
      <>
          {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
          <div className='wrapper'>
          <button className='btn' style={{border:"none", background:"none"}} onClick={onFavoriteClick}>{isFavorited ? <FullHeart width="20" height="20" /> : <EmptyHeart width="20" height="20" />}</button>
        <Link to = {`/oneproduct/${id}`}  key={id}>
        <li className='products'>
              <img className='product-image' src={img} alt="img"></img>
              <span className='product-title'>{title}</span>
        </li>
        </Link>
        
        </div>
        </>
    );
}
  return ( 
    <div>
         <h1 className='title-container--title'>Products</h1>
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
