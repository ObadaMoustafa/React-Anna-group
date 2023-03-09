import React from 'react'
import products from './fake-data/all-products'
import './Style/products.css'
// import ListProduct from './ListProduct';


export default function Products(props) {
  const activeCategory = props;
  const makeFilter = activeCategory === "All" ? "" : activeCategory;
  const nameOfFilter = makeFilter.activeCategory;
  const productsFilter= nameOfFilter !== "All" ? products.filter((product) => product.category === nameOfFilter) : products;


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
         {productsFilter.map((item) => {
          const{id, image, title} = item;
    return(
      <ListProduct key={id} title={title} img={image} />
    )}
    )}
    </ul>
  )
}