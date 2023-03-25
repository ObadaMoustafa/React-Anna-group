<h1>Product List Test fetch</h1>;

/////////////////////----------AXIOS_start__fromProductList.JSX---------//////////////////////////////
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// // console.log(activeCategory);

// const getProductsData = useCallback(async () => {
//   const defineRequestSource =
//     activeCategory !== "All products"
//       ? `https://dummyjson.com/products/category/${activeCategory}`
//       : "https://dummyjson.com/products";

//   await axios(defineRequestSource)
//     .then((response) => {
//       setProductsData(response.data.products);
//     })
//     .catch((error) => {
//       console.error("Error fetching data: ", error);
//       setError(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, [activeCategory]);
// useEffect(() => {
//   getProductsData();
// }, [activeCategory, getProductsData]);

// if (loading) return "Loading ...";
// if (error) return "Error";
// console.log(productsData);
/////////////////////////////////////////----------AXIOS_end----------///////////////////////////////////////////////////////

/////////////////////////////////////////----------AXIOS_start--from ProductDetailsPage----------///////////////////////////////////////////////////////
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// const getProductDetails = useCallback(async () => {
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
/////////////////////////////////////////----------AXIOS_end----------////////////////////////////////////////

/////////////////////////////////////////----------AXIOS_start from Category List----------///////////////////////////////////////////////////////

// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// useEffect(() => {
//   getCategoriesData();
// }, []);

// async function getCategoriesData() {
//   setLoading(true);
//   // await axios("https://fakestoreapi.com/products/categories")
//   await axios("https://dummyjson.com/products/categories")
//     .then((response) => {
//       // console.log(response);
//       setCategoriesData(response.data);
//     })

//     .catch((error) => {
//       console.error("Error fetching data: ", error);
//       setError(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }
// // console.log(categoriesData);
// if (loading) return "Loading ...";
// if (error) return "Error!";
/////////////////////////////////////////----------AXIOS_end----------///////////////////////////////////////////////////////

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

// import { ReactComponent as Heart } from "../assets/heart-regular.svg";
// import { ReactComponent as HeartActive } from "../assets/heart-solid.svg";
// import regularHeart from "../assets/heart-regular.svg";
////////////////////////////////////////////////////////////////////////////////
// import "./components-css/btn.css";
// export const FavoriteBtn = (itemId) => {
//   const { favoriteList, setFavoriteList } = useContext(FavoriteContext);
//   const [favoriteState, setFavoriteState] = useState(false);
//   console.log("itemId", itemId);

//   const addToFavorites = (itemId) => {
//     setFavoriteList((prevFavoriteList) => [...prevFavoriteList, { itemId }]);
//   };

//   const removeFromFavorites = () => {
//     setFavoriteList(favoriteList.filter((item) => item.itemId !== itemId));
//   };

//   const changeFavoriteList = (favoriteState) => {
//     setFavoriteState((favoriteState) => !favoriteState);
//     addToFavorites();
//   };
//   useEffect(() => {
//     changeFavoriteList();
//   }, []);

//   // console.log("favoriteState", favoriteState);
//   console.log("favoriteList", favoriteList);
//   return (
//     <button className="favorite-btn" onClick={changeFavoriteList}>
//       {/* <h1>{value}</h1>
//           {value} */}
//       {/* <Heart className="heart" />
//       <HeartActive className="heart" /> */}
//       Button
//     </button>
//   );
// };
