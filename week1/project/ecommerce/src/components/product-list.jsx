import products from "../fake-data/all-products";
import Product from "./product";
import "./product.css";
function ProductList() {
  return (
    <ul className="products-list">
      {products.map((item) => {
        const { id, image, title } = item;
        //   if (props.activeCategory !== "All products") {
        //       const filteredProducts = products.filter((product) => {
        //           return
        //       })
        //   }

        return <Product key={id} title={title} img={image} />;
      })}
    </ul>
  );
}
export default ProductList;

// activeCategory;
