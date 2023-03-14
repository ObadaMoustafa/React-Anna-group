import React, {useState, useEffect} from 'react';
// import categories from './fake-data/all-categories'
// import './styles/Style-category'
import "./Style/category.css"

// `https://fakestoreapi.com/products/category/<selectedCategory>`
// `https://fakestoreapi.com/products`
export default function Category(props) {
  
  const[categoryName, setCategor] = useState([]);
  useEffect(()=> {
      fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((categoryName) => setCategor(categoryName))
  },[]);

console.log(categoryName);
function selectCategory(name){

    // const getCategoryName =  name.slice(6);
    const checkCategoryState = (previousState) => {
      if (name === previousState) {
        return "All";
      } else {
        return name;
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
         {categoryName.map((category, index) => (
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
