import React from 'react'
import { useParams } from 'react-router-dom'
import SingleProduct from '../components/productList/SingleProduct'
import '../components/productList/productList.css'

export default function ProductDatail() {
   const { itemId } = useParams();

   const [itemInfo, setItemInfo] = React.useState();
   const [isLoading, setIsLoading] = React.useState(true);

   const getItemInfo = React.useCallback(async () => {
      const promise = await fetch(`https://fakestoreapi.com/products/${itemId}`);
      const item = await promise.json();
      setItemInfo(item);
      setIsLoading(false);
   }, [itemId])

   React.useEffect(() => { getItemInfo() }, [itemId, getItemInfo])
   console.log(itemInfo)

   return (
      <div className='singleItemContainer'>
         {isLoading ? 'Loading...' : <SingleProduct itemInfo={itemInfo} />}
      </div>
   )
}
