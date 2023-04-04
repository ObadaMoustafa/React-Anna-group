import React from "react";
import "./products.css";
import Product from "./Product.jsx";

function Products({ products: {products}, selectedCategory }) {
  console.log("Products:", products); 
  const filteredProducts = products && selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  console.log("Filtered products:", filteredProducts);
  return (
    <div className="products">
      {filteredProducts && filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))
      ) : (
        <p> No products were found in the selected category. Try another category</p>
      )}
    </div>
  );
}

// function Products({ products: {products}, selectedCategory }) {
//   console.log("Products:", products); 
//   const filteredProducts = selectedCategory
//   ? products.filter((product) => product.category === selectedCategory)
//   : products;
//   console.log("Filtered products:", filteredProducts);
//   return (
//     <div className="products">
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((product) => (
//           <Product product={product} key={product.id} />
//         ))
//       ) : (
//         <p> No products were found in the selected category. Try another category</p>
//       )}
//     </div>
//   );
// }

export default Products;
