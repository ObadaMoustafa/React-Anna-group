<h1>Product List Test fetch</h1>;

// ////////////////////////////////////////////////////////////////////////
// all products
// useEffect(() => {
//   getProductsData();
// }, [selectedCategory]);
// async function getProductsData() {
//   await axios("https://fakestoreapi.com/products")
//     .then((responce) => {
//       setProductsData(responce.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data: ", error);
//       setError(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }

// if (loading) return "Loading ...";
// if (error) return "Error";
// console.log(productsData);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // var 1
// const defineRequestSource =
//   selectedCategory !== "All products"
//     ? `https://fakestoreapi.com/products/category/${selectedCategory}`
//     : "https://fakestoreapi.com/products";

// useEffect(() => {
//   getProductsData();
// }, [selectedCategory]);

// async function getProductsData() {
//   await axios(defineRequestSource)
//     .then((responce) => {
//       setProductsData(responce.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data: ", error);
//       setError(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }
// if (loading) return "Loading ...";
// if (error) return "Error";
// console.log(productsData);

// getProductsData();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 2
// useEffect(() => {
//   getProductsData2();
// }, [selectedCategory]);
// async function getProductsData2() {
//   selectedCategory !== "All products"
//     ? await axios(
//         `https://fakestoreapi.com/products/category/${selectedCategory}`
//       )
//     : await axios("https://fakestoreapi.com/products")

//         .then((responce) => {
//           setProductsData(responce.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching data: ", error);
//           setError(error);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
// }
// if (loading) return "Loading ...";
// if (error) return "Error";
// console.log(productsData);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var 3

// const getProductsData3 = async () => {
//   const res =
//     selectedCategory !== "All products"
//       ? await axios(
//           `https://fakestoreapi.com/products/category/${selectedCategory}`
//         )
//       : await axios("https://fakestoreapi.com/products");
//   setProductsData(res)
//     .catch((error) => {
//       console.error("Error fetching data: ", error);
//       setError(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// };
//   useEffect(() => {
//     getProductsData3();
//   }, [selectedCategory, getProductsData3]);
// if (loading) return "Loading ...";
// if (error) return "Error";
// console.log(productsData);
