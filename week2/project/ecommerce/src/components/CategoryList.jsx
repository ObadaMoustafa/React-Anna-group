import Category from "./Category";

import "./components-css/category.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CategoryList(props) {
  const [categoriesData, setCategoriesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategoriesData();
  }, []);

  async function getCategoriesData() {
    await axios("https://fakestoreapi.com/products/categories")
      .then((respose) => {
        setCategoriesData(respose.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) return "Loading ...";
  if (error) return "Error!";

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
      {categoriesData.map((category, i) => (
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
