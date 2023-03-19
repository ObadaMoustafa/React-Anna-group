import React, {useState, useEffect} from 'react';
import "./Style/category.css"
import ListCategory from './Button';
import ErrorMessage from '../pages/ErrorMessage';

export default function Category(props) {
  
  const[categoryName, setCategory] = useState([]);
  const[isLoading, setLoading] = useState(true);
  const [errorObj, setErrorObj] = useState({ isError: false, message: '' })
  useEffect(()=> {CategoriesList()}, []);
async function CategoriesList() {
  try{
    setLoading(true);
    const prom = await fetch('https://fakestoreapi.com/products/categories');
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
    </>
  );
}
