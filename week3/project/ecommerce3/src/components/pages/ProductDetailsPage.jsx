import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";
import Error from "../ErrorMsg";
import Loading from "../Loading";

function ProductDetailsPage() {
  const { productId } = useParams();
  //   console.log(productId);
  const [product, setProduct] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  /////////////////////////////////////////----------async_Fetch_start----------///////////////////////////////////////////////////////
  const [errorObj, setErrorObj] = useState({ isError: true, msg: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function getProductDetails(productId) {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      if (!response.ok)
        throw new Error(
          `Error happened: ${response.status} ${response.statusText}`
        );
      const data = await response.json();
      // console.log(data);
      setProduct(data);
    } catch (error) {
      setErrorObj({ isError: true, msg: error.message });
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getProductDetails(productId);
  }, [productId]);

  // useEffect(() => {
  //   console.log(errorObj);
  // }, [errorObj]);

  /////////////////////////////////////////----------AXIOS_start----------///////////////////////////////////////////////////////
  //       const getProductDetails = useCallback(async () => {
  //   await axios(`https://dummyjson.com/products/${productId}`)
  //       //   await axios(`https://fakestoreapi.com/products/${productId}`)
  //           .then((response) => {
  //             setProduct(response.data);
  //           })
  //           .catch((error) => {
  //             console.error("Error fetching data: ", error);
  //             setError(error);
  //           })
  //           .finally(() => {
  //             setLoading(false);
  //           });
  //       }, [productId]);
  //       useEffect(() => {
  //         getProductDetails();
  //       }, [productId, getProductDetails]);

  //       if (loading) return "Loading ...";
  //       if (error) return "Error!";
  //     //   console.log(product);
  //     //   console.log(productId);
  /////////////////////////////////////////----------AXIOS_end----------///////////////////////////////////////////////////////
  return (
    <div className="product-card">
      {errorObj.isError && <Error msg={errorObj.msg} />}
      {isLoading && <Loading />}
      {product && (
        <ProductCard
          id={product.id}
          title={product.title}
          img={product.images[0]}
          description={product.description}
        />
      )}
    </div>
  );
}
export default ProductDetailsPage;
