import React from 'react'
import {useState, useEffect, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import Productdetailcard from '../components/Productdetail';

export default function Oneproduct() {
  const {prodId} = useParams();
  const [prod, setProdData] = useState();
  const [isLoading, setIsLoading] = useState(true);
 
  const getProductsDescription = 
  useCallback(
    async () => {
          const prom = await fetch(`https://fakestoreapi.com/products/${prodId}`) 
          const data = await prom.json(); 
          console.log(data);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000)
          setProdData(data)
        }, [prodId]
  )
      
  useEffect(() => {getProductsDescription()}, [prodId, getProductsDescription])
    return(
        <div>
        {isLoading ? <div></div> :
      <div>
        <Productdetailcard proddescription={prod} /> 
     </div>
}
</div>
    )
}