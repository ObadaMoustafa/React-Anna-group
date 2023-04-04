// import { useState, useEffect } from "react";
import useFetch from "./useFetchHook";

function useProducts (selectedCategory, url = "https://dummyjson.com/products?limit=100") {
  const {data: products, loading, error } = useFetch(
    selectedCategory ? `${url}/category/${selectedCategory}` : url
  );

  return {products, loading, error};
}


// function useProducts (selectedCategory) {
//   const [products, setProducts] = useState([]);
//   const[loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
   
//     setLoading(true);
//     setError("");

//     let url = "https://fakestoreapi.com/products";
//     if (selectedCategory) {
//       url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
//     }
//     fetch (url)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);  
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//         let errorCode = "";
//           if (error.response && error.response.status) {
//             errorCode = error.response.status;
//           } else if (error.request) {
//             errorCode = "NETWORK_ERROR";
//           } else {
//             errorCode = "UNKNOWN_ERROR";
//           }
//           switch (errorCode) {
//             case 404:
//               setError("Products data not found.");
//               break;
//             case "NETWORK_ERROR":
//               setError("Network error. Please check your internet connection and try again.");
//               break;
//             case "UNKNOWN_ERROR":
//               setError("Unknown error occurred. Please try again later.");
//               break;
//             default:
//               setError("Failed to load products data. Please, try again later");
//           }   
//        });
//   }, [selectedCategory]);
//   //  console.log (selectedCategory);

//   return {products, loading, error};
// }

export default useProducts;

