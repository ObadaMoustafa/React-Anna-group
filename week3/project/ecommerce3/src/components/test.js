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
