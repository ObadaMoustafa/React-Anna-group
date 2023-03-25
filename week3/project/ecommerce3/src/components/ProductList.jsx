import Product from "./Product";
import "./components-css/product.css";
import { useEffect } from "react";
import ErrorMsg from "./ErrorMsg";
import Loading from "./Loading";
import { useFetch } from "../hooks/useFetch";


function ProductList({ activeCategory }) {
  const defineRequestSource =
    activeCategory !== "All products"
      ? `https://dummyjson.com/products/category/${activeCategory}`
      : "https://dummyjson.com/products";

  const { data, errorObj, isLoading, performFetch } = useFetch();
  useEffect(() => {
    performFetch(defineRequestSource);
    // eslint-disable-next-line
  }, [activeCategory, defineRequestSource]);


  return (
    <>
      {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
      {isLoading && <Loading />}

      <ul className="products-list">
        {data &&
          data.products.map((item) => {
            const { id, images, title } = item;
            return <Product title={title} img={images[0]} id={id} key={id} />;
          })}
      </ul>
    </>
  );
}

export default ProductList;
