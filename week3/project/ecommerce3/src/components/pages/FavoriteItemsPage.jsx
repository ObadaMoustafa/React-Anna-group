import React from "react";
import { useEffect, useContext, useState } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import { useFetch } from "../../hooks/useFetch";
import ErrorMsg from "../ErrorMsg";
import Loading from "../Loading";
import Product from "../Product";

const FavoriteItemsPage = () => {
  const { favoriteIdList } = useContext(FavoriteContext);
  console.log("favID", favoriteIdList, favoriteIdList.length);

  const { errorObj, isLoading, performFetch } = useFetch();
  const [favoriteProduct, setFavoriteProduct] = useState([]);

  async function getFetch() {
    for (let i = 0; i < favoriteIdList.length; i++) {
      let data = await performFetch(
        `https://dummyjson.com/products/${favoriteIdList[i].itemId}`
      );
      setFavoriteProduct((prev) => [...prev, data]);
    }
  }

  useEffect(() => {
    getFetch();
  }, []);
  // console.log("favoriteProduct", favoriteProduct);

  return (
    <div>
      {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
      {isLoading && <Loading />}
      {favoriteIdList.length === 0 ? (
        <h1>You don't have favorite items yet</h1>
      ) : (
        <h1>FAVORITE ITEMS</h1>
      )}

      {
        <ul className="products-list">
          {favoriteProduct &&
            favoriteProduct.map((item) => {
              const { id, images, title } = item;
              return <Product title={title} img={images[0]} id={id} key={id} />;
            })}
        </ul>
      }
    </div>
  );
};

export default FavoriteItemsPage;
