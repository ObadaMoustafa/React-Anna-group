import React from 'react'
// import products from './fake-data/all-products'
import './Style/products.css'
import {useState, useEffect, useCallback} from 'react';
// import ListProduct from './ListProduct';



export default function Products({activeCategory}) {

  

  // const activeCategory = props;
  console.log(activeCategory)
  // const[products, setProd] = useState([]);
  // console.log(activeCategory)
  // const makeFilter = activeCategory === "All" ? "" : activeCategory;
  // const nameOfFilter = makeFilter.activeCategory;
  // const productsFilter= nameOfFilter !== "All" ? products.filter((product) => product.category === nameOfFilter) : products;
    const [prodData, setProdData] = useState([]);

    const getProducts = useCallback(
      async () => {
            const prom = (activeCategory !== 'All') ? await fetch(`https://fakestoreapi.com/products/category/${activeCategory}`) : await fetch(`https://fakestoreapi.com/products`)
            const data = await prom.json(); 
            setProdData(data)
          }, [activeCategory]
    )

    useEffect(() => {getProducts()}, [activeCategory, getProducts])

    console.log(prodData)
    // useEffect(()=> {
    //   async () => {
    //     const prom = (activeCategory !== 'All') ? await fetch(`https://fakestoreapi.com/products/category/${activeCategory}`) : await fetch(`https://fakestoreapi.com/products`)
    //     const data = await prom.json(); setProdData(data)
    //   }
      

    //     // .then((response) => response.json())
    //     // .then((products) => setProd(products))
    // },[activeCategory]);

 


  function ListProduct({id, img, title}) {
    return(
        <li className='products' key={id}>
            <div className='wrapper'>
            <img className='product-image' src={img}></img>
            <span className='product-title' >{title}</span>
            </div>
        </li>
    );
}
  return ( 
    <ul className='item-list'>
         {prodData.map((item) => {
          const{id, image, title} = item;
    return(
      <ListProduct key={id} title={title} img={image} />
    )}
    )}
    </ul>
  )
}