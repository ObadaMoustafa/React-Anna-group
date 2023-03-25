import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoriteContext } from "../../context/FavoriteContext";
import { useFetch } from "../../hooks/useFetch";
import ErrorMsg from "../ErrorMsg";
import Loading from "../Loading";

const FavoriteItemsPage = () => {
  const { favoriteList } = useContext(FavoriteContext);
  console.log(favoriteList, favoriteList.length);
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  const { data, errorObj, isLoading, performFetch } = useFetch();


  // useEffect(() => {
  //   for (let i = 0; i < favoriteList.length; i++) {
  //     console.log("test", favoriteList[i]);
  //      performFetch(`https://dummyjson.com/products/${favoriteList[i]}`);
  //   }
  // },[])
   
  


 

  // console.log(productId )
  // const productId  = 5
  //  useEffect(() => {
  //    performFetch(`https://dummyjson.com/products/${productId}`);
  //    // eslint-disable-next-line
  //  }, [productId]);
  console.log('data',data)
    // console.log("favoriteProduct", favoriteProduct);
  return (
    <div>
      {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
      {isLoading && <Loading />}
      {favoriteList.length == 0 ? (
        <h1>You don't have favorite items yet</h1>
      ) : (
        <h1>FAVORITE ITEMS</h1>
      )}
      {/* {<h2>{data.title}</h2>} */}
      {/* 
      {
        <ul className="products-list">
          {data &&
            data.products.map((item) => {
              const { id, images, title } = item;
              return <Product title={title} img={images[0]} id={id} key={id} />;
            })}
        </ul>
      } */}
    </div>
  );
};

export default FavoriteItemsPage;

// const { data, errorObj, isLoading, performFetch } = useFetch();

// useEffect(() => {
//   performFetch(`https://dummyjson.com/products`);
// }, []);

// return (
//   <div className="product-card">
//     {errorObj.isError && <ErrorMsg msg={errorObj.msg} />}
//     {isLoading && <Loading />}
//     {data && (
//       <ProductCard
//         id={data.id}
//         title={data.title}
//         img={data.images[0]}
//         description={data.description}
//       />
//     )}
//   </div>
// );



