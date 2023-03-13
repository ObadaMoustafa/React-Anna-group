import products from "../fake-data/all-products";
import Product from "./Product";
import "./components-css/product.css";

function ProductList(props) {
  const activeCategory = props;
  const getFilter = activeCategory === "All products" ? "" : activeCategory;
  //   console.log(getFilter);
  const filterName = getFilter.activeCategory;
  //   console.log(filterName);
  const filteredList =
    filterName !== "All products"
      ? products.filter((product) => product.category === filterName)
      : products;

  return (
    <ul className="products-list">
      {filteredList.map((item) => {
        const { id, image, title } = item;

        return <Product key={id} title={title} img={image} />;
      })}
    </ul>
  );
}
export default ProductList;
