import React from "react";
import { useEffect, useContext, useState } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import { useFetch } from "../../hooks/useFetch";
import ErrorMsg from "../ErrorMsg";
import Loading from "../Loading";
import Product from "../Product";

const FavoriteItemsPage = () => {
  const { favoriteIdList } = useContext(FavoriteContext);

  const [favoriteProductList, setFavoriteProductList] = useState([]);
  // ////////////////////////////////////////////////////////////////returns 2 results
  // const { errorObj, isLoading, performFetch } = useFetch();
  // async function getFetch() {
  //   for (let i = 0; i < favoriteIdList.length; i++) {
  //     console.log(favoriteIdList);
  //     let data = await performFetch(
  //       `https://dummyjson.com/products/${favoriteIdList[i]}`
  //     );
  //     setFavoriteProduct((prev) => [...prev, data]);
  //   }
  // }
  // ////////////////////////////////////////////////////////////////OBADA
  // const { errorObj, isLoading, performFetch } = useFetch();
  // async function getFetch() {
  //   const arrayOfRequests = favoriteIdList.map(async (id) =>
  //     performFetch(`https://dummyjson.com/products/${id}`)
  //   );
  //   try {
  //     const data = await Promise.all(arrayOfRequests);
  //     setFavoriteProduct(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {
  //   getFetch();
  // }, [favoriteIdList]);

  ////////////////////////////////////////////////////////////////____3 - OK
  // const [errorObj, setErrorObj] = useState({ isError: null, msg: "" });
  // const [isLoading, setIsLoading] = useState(false);
  // const allFavoritesPromise = () => {
  //   setIsLoading(true);
  //   setErrorObj([]);
  //   Promise.all(
  //     favoriteIdList.map((id) =>
  //       fetch(`https://dummyjson.com/products/${id}`).then((response) =>
  //         response.json()
  //       )
  //     )
  //   )
  //     .then(setFavoriteProductList)
  //     .catch((e) => setErrorObj({ isError: true, msg: `Error happened: ${e}` }))
  //     .finally(() => setIsLoading(false));
  // };

  // useEffect(() => {
  //   allFavoritesPromise();
  // }, [favoriteIdList]);

  ///////////////////////////////////////////////////4
  const [errorObj, setErrorObj] = useState({ isError: null, msg: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function fP() {
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
    fP();
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
