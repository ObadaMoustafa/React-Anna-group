import Category from "./Category";
import "./components-css/category.css";
import { useEffect } from "react";
import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";
import { useFetch } from "../hooks/useFetch";

function CategoryList(props) {
  const { data, errorObj, isLoading, performFetch } = useFetch();

  useEffect(() => {
    performFetch("https://dummyjson.com/products/categories");
    // eslint-disable-next-line
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
      {data &&
        data.map((category, i) => (
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
