import products from "../fake-data/all-products";
import Product from "./product";
import "./product.css";

function ProductList(props) {
  const activeCategory = props;
  const getFilter = activeCategory === "All products" ? "" : activeCategory;
//   console.log(getFilter);
  const filterName = getFilter.activeCategory;
//   console.log(filterName);
  const filteredList = filterName
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

///////////////////////////////////////////////////////////////////////
// Пример отображения с Product from Product List
///////////////////////////////////////////////////////////////////////
// function ProductList(props) {

//     return (
//       <ul className="products-list">
//         {products.map((item) => {
//           const { id, image, title } = item;
//           //   if (props.activeCategory !== "All products") {
//           //       const filteredProducts = products.filter((product) => {
//           //           return
//           //       })
//           //   }

//           return <Product key={id} title={title} img={image} />;
//         })}
//       </ul>
//     );
// }
// export default ProductList;

// activeCategory;
