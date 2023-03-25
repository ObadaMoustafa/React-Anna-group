import { useEffect } from "react";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";
import Error from "../ErrorMsg";
import Loading from "../Loading";
import { useFetch } from "../../hooks/useFetch";
// import { useContext } from "react";
// import { FavoriteContext } from "../../context/FavoriteContext";

function ProductDetailsPage() {
  // const { favoriteList, setFavoriteList } = useContext(FavoriteContext);
  // console.log("favorite", favoriteList);
  const { productId } = useParams();


  const { data, errorObj, isLoading, performFetch } = useFetch();

  useEffect(() => {
    performFetch(`https://dummyjson.com/products/${productId}`);
    // eslint-disable-next-line
  }, [productId]);

  return (
    <div className="product-card">
      {errorObj.isError && <Error msg={errorObj.msg} />}
      {isLoading && <Loading />}
      {data && (
        <ProductCard
          id={data.id}
          title={data.title}
          img={data.images[0]}
          description={data.description}
        />
      )}
    </div>
  );
}
export default ProductDetailsPage;
