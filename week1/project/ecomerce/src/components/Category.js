
import categories from './fake-data/all-categories'
// import './styles/Style-category'
import "./Style/category.css"
import ListCategory from './Button';


export default function Category(props) {

  function selectCategory(name){
    const getCategoryName =  name.slice(6);
    const checkCategoryState = (previousState) => {
      if (getCategoryName === previousState) {
        return "All";
      } else {
        return getCategoryName;
      }
    };
    props.choosedCategory(checkCategoryState);
  }
  


  return(
    <div className='categories'>
         {categories.map((category, index) => (
        <ListCategory
        name={category}
        key={index}
        onClick={() => {
            selectCategory(category);
        }}
        />
    ))}
    </div>
  );
}
