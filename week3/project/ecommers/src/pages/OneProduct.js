import React from 'react'
import {useState, useEffect, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import Productdetailcard from '../components/Productdetail';
import ErrorMessage from './ErrorMessage';

export default function Oneproduct() {
  const {prodId} = useParams();
  const [prod, setProdData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorObj, setErrorObj] = useState({ isError: false, message: '' })
  
  
  const getProductsDescription = 
  useCallback(
    async () => {
      try{
        setIsLoading(true);
        const prom = await fetch(`https://dummyjson.com/products/${prodId}`) 
        const data = await prom.json();
        setProdData(data) 
      }
      catch(error) {
        setErrorObj({ isError: true, message: error.message })
      }
      finally{
        setIsLoading(false);
      }
     }, [prodId]
  )
      
  useEffect(() => {getProductsDescription(prodId)}, [prodId])
    
  return(
        <div>
          {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
          {isLoading ? <div></div> :
      <div>
        {prod && (
        <Productdetailcard
          id={prod.id}
          title={prod.title}
          img={prod.images[0]}
          description={prod.description}
        />
      )}
     </div>
}
</div>
    )
}