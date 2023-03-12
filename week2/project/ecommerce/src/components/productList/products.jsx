import Product from './product'
import React from 'react'
import './productList.css'

function Products({ prodCategory }) {
   const [productList, setProductList] = React.useState()
   const [isLoading, setIsLoading] = React.useState(true);



   const getProductList = React.useCallback(async () => {
      const promise = (prodCategory !== 'All items')
         ? await fetch(`https://fakestoreapi.com/products/category/${prodCategory}`)
         : await fetch('https://fakestoreapi.com/products')
      const items = await promise.json();
      setProductList(items);
      setIsLoading(false);
   }, [prodCategory])

   React.useEffect(() => { getProductList() }, [prodCategory, getProductList])

   return (
      <div className='productList-conteiner'>
         <div className='productList'>
            {isLoading ? <div>Loading...</div> :
               productList.map((item) => <Product key={item.id} item={item} />)}
         </div>
      </div >
   )
}

export default Products