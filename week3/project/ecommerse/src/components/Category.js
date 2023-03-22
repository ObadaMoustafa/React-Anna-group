import React, {useState, useEffect} from 'react';
import "./Style/category.css"
import ListCategory from './Button';
import ErrorMessage from '../pages/ErrorMessage';

export default function Category(props) {
  
  const[categoryName, setCategory] = useState(null);
  const[isLoading, setLoading] = useState(true);
  const [errorObj, setErrorObj] = useState({ isError: false, message: '' })
  
async function CategoriesList() {
  try{
    setLoading(true);
    const prom = await fetch('https://dummyjson.com/products/categories/');
    const data = await prom.json();
    setCategory(data);
  }
  catch(error) {
    setErrorObj({ isError: true, message: error.message })
  }
  finally{
    setLoading(false);
  }
}

useEffect(()=> {CategoriesList()}, []);

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
    <>
    {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
    <div>
      {isLoading ? <div>Loading...</div> :
    <div className='categories'>
         {categoryName && categoryName.map((category, index) => (
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
    </>
  );
}
