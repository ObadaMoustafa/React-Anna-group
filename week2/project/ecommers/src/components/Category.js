import React, {useState, useEffect} from 'react';
import "./Style/category.css"
import ListCategory from './Button';


export default function Category(props) {
  
  const[categoryName, setCategor] = useState([]);
  const[isLoading, setLoading] = useState(true);
  useEffect(()=> {
      fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((categoryName) => setCategor(categoryName))
      setTimeout(() => {
              setLoading(false);
            }, 1000)
  },[]);


function selectCategory(name){

    const checkCategoryState = (previousState) => {
      if (name === previousState) {
        return "All";
      } else {
        return name;
      }
    };
    props.choosedCategory(checkCategoryState);
  }

  return(
    <div>
      {isLoading ? <div></div> :
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
}
    </div>
  );
}
