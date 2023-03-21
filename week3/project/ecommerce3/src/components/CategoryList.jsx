import Category from "./Category";

import "./components-css/category.css";
import { useEffect, useState } from "react";

import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";

function CategoryList(props) {
  const [categoriesData, setCategoriesData] = useState(null);

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
