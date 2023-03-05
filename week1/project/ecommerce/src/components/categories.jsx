import CategoriesList from '../fake-data/all-categories'
import { useRef } from 'react'

function Categories(props) {
   const previousCategoryRef = useRef('All items');
   const activeCategoryRef = useRef('All items');

   const getCategoryName = (name) => name.slice(6 - name.length)

   function setCategoryName(actCategory) {
      props.useStateFunction((prevCategory) => {
         previousCategoryRef.current = prevCategory;
         activeCategoryRef.current = actCategory;
         return actCategory
      })
   }

   function setClassName(checkingCategory, previous, active) {
      if (active === 'All items' || checkingCategory === previous || checkingCategory !== active) {
         return 'button'
      } else {
         return 'button active';
      }
   }

   return (
      <div className='categories-container'>
         <div className='categories'>
            {CategoriesList.map((category, index) => {
               const categoryName = getCategoryName(category);
               const className = setClassName(categoryName, previousCategoryRef.current, activeCategoryRef.current)
               return <button className={className} key={index} id={index} onClick={() => { setCategoryName(categoryName) }}>{categoryName}</button>
            })}
         </div>
      </div>
   )
}

export default Categories