import Product from "./Product";
import "./components-css/product.css";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList({ activeCategory }) {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log(activeCategory);

  const getProductsData = useCallback(async () => {
    const defineRequestSource =
      activeCategory !== "All products"
        ? `https://fakestoreapi.com/products/category/${activeCategory}`
        : "https://fakestoreapi.com/products";

    await axios(defineRequestSource)
      .then((responce) => {
        setProductsData(responce.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [activeCategory]);
  useEffect(() => {
    getProductsData();
  }, [activeCategory, getProductsData]);

  if (loading) return "Loading ...";
  if (error) return "Error";
  // console.log(productsData);

  return (
    <ul className="products-list">
      {productsData.map((item) => {
        const { id, image, title } = item;
        return (
          <Link to={`/products/${id}`}>
            <Product key={id} title={title} img={image} />
          </Link>
        );
      })}
    </ul>
  );
}
export default ProductList;
