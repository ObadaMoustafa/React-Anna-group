import CategoriesList from '../../fake-data/all-categories'
import Category from './category'
import './productList.css'

function Categories(props) {

   return (
      <div className='categories-container'>
         <div className='categories'>
            {CategoriesList.map((category, index) => {
               return <Category key={index} category={category} useStateFunction={props.useStateFunction} activeCategory={props.activeCategory} />
            })}
         </div>
      </div>
   )
}

export default Categories