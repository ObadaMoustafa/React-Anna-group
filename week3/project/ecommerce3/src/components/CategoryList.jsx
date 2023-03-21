import Category from "./Category";

import "./components-css/category.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";

function CategoryList(props) {
  const [categoriesData, setCategoriesData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [errorObj, setErrorObj] = useState({ isError: true, msg: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function getCategoriesData() {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/products/categories");
      if (!response.ok)
        throw new Error(
          `Error happened: ${response.status} ${response.statusText}`
        );
      const data = await response.json();
      // console.log(data);
      setCategoriesData(data);
    } catch (error) {
      setErrorObj({ isError: true, msg: error.message });
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getCategoriesData();
  }, []);

  /////////////////////////////////////////----------AXIOS_start----------///////////////////////////////////////////////////////
  // useEffect(() => {
  //   getCategoriesData();
  // }, []);

  // async function getCategoriesData() {
  //   setLoading(true);
  //   // await axios("https://fakestoreapi.com/products/categories")
  //   await axios("https://dummyjson.com/products/categories")
  //     .then((response) => {
  //       // console.log(response);
  //       setCategoriesData(response.data);
  //     })

  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }
  // // console.log(categoriesData);
  // if (loading) return "Loading ...";
  // if (error) return "Error!";
  /////////////////////////////////////////----------AXIOS_end----------///////////////////////////////////////////////////////

  function chooseCategory(name) {
    const checkedCategoryState = (prevState) => {
      if (name === prevState) {
        return "All products";
      } else {
        return name;
      }
    };
    props.setCategoryName(checkedCategoryState);
  }

  return (
    <div className="categories-block">
      {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
      {isLoading && <Loading />}
      {categoriesData &&
        categoriesData.map((category, i) => (
          <Category
            name={category}
            key={i}
            onClick={() => {
              chooseCategory(category);
            }}
            className={
              props.activeCategory === category
                ? "category-btn-selected"
                : "category-btn"
            }
          />
        ))}
    </div>
  );
}
export default CategoryList;

///////////////////____Working fetch without errors & loading______ ///////////////////
// async function getCategoriesData() {
//   const response = await fetch(`https://dummyjson.com/products/categories`);
//   const data = await response.json();
//   setCategoriesData(data);
// }
// useEffect(() => {
//   getCategoriesData();
// }, []);

// useEffect(() => {
//   console.log(categoriesData);
// }, [categoriesData]);
