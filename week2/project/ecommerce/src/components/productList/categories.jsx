import React from 'react'
import Category from './category'
import './productList.css'

function Categories({ onClick, activeCategory }) {

   const [CategoriesList, setCategoriesList] = React.useState();
   const [isLoading, setIsLoading] = React.useState(true);

   React.useEffect(() => getCategoriesList, []);

   async function getCategoriesList() {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const categories = await response.json();
      setCategoriesList(categories);
      setIsLoading(false);
   }

   return (
      <div className='categories-container'>
         <div className='categories'>
            {isLoading ? <div>Loading...</div> :
               CategoriesList.map((category, index) => {
                  return <Category key={index} category={category} onClick={onClick} activeCategory={activeCategory} />
               })}
         </div>
      </div>
   )
}

export default Categories