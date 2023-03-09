import Category from "./Category";
import categoryList from "../fake-data/all-categories";
import "./category.css";

function CategoryList(props) {
  function chooseCategory(name) {
    const categoryName = name.slice(6);
    // console.log(categoryName);
    const checkedCategoryState = (prevState) => {
      if (categoryName === prevState) {
        return "All products";
      } else {
        return categoryName;
      }
    };

    props.setCategoryName(checkedCategoryState);
  }

  return (
    <div className="categories-block">
      {categoryList.map((category, i) => (
        <Category
          name={category}
          key={i}
          onClick={() => {
            chooseCategory(category);
          }}
          className="category-btn"
        />
      ))}
    </div>
  );
}
export default CategoryList;
