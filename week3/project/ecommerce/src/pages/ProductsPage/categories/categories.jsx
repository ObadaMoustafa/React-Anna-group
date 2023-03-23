import { useEffect } from 'react'
import ErrorMessage from '../../../components/common/Error/ErrorMessage';
import Category from './category'
import Spinner from '../../../components/common/Spinner/Spinner'
import '../css/product.css'
import useFetch from '../../../hooks/useFetch';

function Categories({ onClick, activeCategory }) {

   const { data, isLoading, errorObj, getFetch } = useFetch()

   // eslint-disable-next-line
   useEffect(() => { getFetch('https://dummyjson.com/products/categories') }, [])

   const CategoriesList = data;

   return (
      <div className='categories-container'>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         <div className='categories'>
            {isLoading && <div><Spinner /></div>}
            {CategoriesList && CategoriesList.map((category, index) => {
               return <Category key={index} category={category} onClick={onClick} activeCategory={activeCategory} />
            })}
         </div>
      </div>
   )
}

export default Categories