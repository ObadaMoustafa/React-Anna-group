import React, {useState, useEffect} from 'react';
import "./Style/category.css"
import ListCategory from './Button';
import ErrorMessage from '../pages/ErrorMessage';

export default function Category(props) {
  
  const[categoryName, setCategor] = useState([]);
  const[isLoading, setLoading] = useState(true);
  const [errorObj, setErrorObj] = useState({ isError: false, message: '' })
  useEffect(()=> {
      fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((categoryName) => setCategor(categoryName))
      setTimeout(() => {
              setLoading(false);
            }, 1000)
  },[]);
async function CategoriesList() {
  try{
    setLoading(true);
    const prom = await fetch('https://fakestoreapi.com/products/categories');
    const data = await prom.json();
    setCategor(data);
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
