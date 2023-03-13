import Product from "./Product";
import "./components-css/product.css";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

function ProductList({ activeCategory }) {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(activeCategory);
  // // var 0

  const getProductsData = useCallback(async () => {
    const defineRequestSource =
      activeCategory !== "All products"
        ? `https://fakestoreapi.com/products/category/${activeCategory}`
        : "https://fakestoreapi.com/products";

    await axios(defineRequestSource)
      .then((responce) => {
        setProductsData(responce.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [activeCategory]);
  useEffect(() => {
    getProductsData();
  }, [activeCategory, getProductsData]);

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
  if (loading) return "Loading ...";
  if (error) return "Error";
  console.log(productsData);

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

  return (
    <ul className="products-list">
      {productsData.map((item) => {
        const { id, image, title } = item;

        return <Product key={id} title={title} img={image} />;
      })}
    </ul>
  );
}
export default ProductList;
