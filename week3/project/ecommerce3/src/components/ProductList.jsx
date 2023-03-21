import Product from "./Product";
import "./components-css/product.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";

function ProductList({ activeCategory }) {
  const [productsData, setProductsData] = useState([]);
  const [errorObj, setErrorObj] = useState({ isError: true, msg: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function getProductsData(activeCategory) {
    const defineRequestSource =
      activeCategory !== "All products"
        ? `https://dummyjson.com/products/category/${activeCategory}`
        : "https://dummyjson.com/products";
    try {
      setIsLoading(true);
      const response = await fetch(defineRequestSource);
      if (!response.ok)
        throw new Error(
          `Error happened: ${response.status} ${response.statusText}`
        );
      const data = await response.json();
      // console.log(data);
      setProductsData(data.products);
    } catch (error) {
      setErrorObj({ isError: true, msg: error.message });
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getProductsData(activeCategory);
  }, [activeCategory]);

  return (
    <>
      {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
      {isLoading && <Loading />}
      <ul className="products-list">
        {productsData.map((item) => {
          const { id, images, title } = item;
          return (
            <Link to={`/products/${id}`} key={id}>
              <Product title={title} img={images[0]} id={id} />
            </Link>
          );
        })}
      </ul>
    </>
  );
}
export default ProductList;
