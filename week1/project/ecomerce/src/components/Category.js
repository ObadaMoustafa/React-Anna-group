
import categories from './fake-data/all-categories'
// import './styles/Style-category'
import "./Style/category.css"


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
    props.useStateCategory(checkCategoryState);
  }
  
  function ListCategory({name, onClick}) {
    return(
        <button className="categoty-btn" onClick={onClick}>{name}</button>
    );
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
