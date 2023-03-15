import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductDetails = useCallback(async () => {
    await axios(`https://fakestoreapi.com/products/${productId}`)
      .then((responce) => {
        setProduct(responce.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);
  useEffect(() => {
    getProductDetails();
  }, [productId, getProductDetails]);

  if (loading) return "Loading ...";
  if (error) return "Error!";
  // console.log(product);
  // console.log(productId);
  return (
    <div className="product-card">
      <ProductCard productDetales={product} />
    </div>
  );
}
export default ProductDetailsPage;
