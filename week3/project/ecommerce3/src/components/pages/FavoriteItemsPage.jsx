import React from "react";
import { useEffect, useContext, useState } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import ErrorMsg from "../ErrorMsg";
import Loading from "../Loading";
import Product from "../Product";

const FavoriteItemsPage = () => {
  const { favoriteIdList } = useContext(FavoriteContext);

  const [favoriteProductList, setFavoriteProductList] = useState([]);

  const [errorObj, setErrorObj] = useState({ isError: null, msg: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function getFavorites() {
    const favoriteIdRequests = favoriteIdList.map((id) =>
      fetch(`https://dummyjson.com/products/${id}`)
    );
    const arrayOfResponse = await Promise.all(favoriteIdRequests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .catch((e) => setErrorObj({ isError: true, msg: `Error happened: ${e}` }))
      .finally(() => setIsLoading(false));
    setFavoriteProductList(arrayOfResponse);
  }

  useEffect(() => {
    getFavorites();
    // eslint-disable-next-line
  }, [favoriteIdList]);

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
          {favoriteProductList &&
            !errorObj.isError &&
            !isLoading &&
            favoriteProductList.map((item) => {
              const { id, images, title } = item;
              return <Product title={title} img={images[0]} id={id} key={id} />;
            })}
        </ul>
      }
    </div>
  );
};

export default FavoriteItemsPage;
