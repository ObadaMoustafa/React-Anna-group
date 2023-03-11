import CategoriesList from '../../fake-data/all-categories'
import Category from './Category'
import './productList.css'

function Categories({ onClick, activeCategory }) {

   return (
      <div className='categories-container'>
         <div className='categories'>
            {CategoriesList.map((category, index) => {
               return <Category key={index} category={category} onClick={onClick} activeCategory={activeCategory} />
            })}
         </div>
      </div>
   )
}

export default Categories