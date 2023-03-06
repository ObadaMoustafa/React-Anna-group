import Category from "./category";
import categoryList from "../fake-data/all-categories";
import "./category.css";
function CategoryList() {
  return (
    <div className="categories-block">
      {categoryList.map((category, i) => (
        <Category name={category} key={i} />
      ))}
    </div>
  );
}
export default CategoryList;
