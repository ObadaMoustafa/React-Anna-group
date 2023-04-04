import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import { useFavorites } from "./FavProductContext";
import {ReactComponent as HeartFilled} from './assets/heart-solid.svg';
import {ReactComponent as HeartEmpty} from './assets/heart-regular.svg';

function Product({ product }) {
  const [favorites, setFavorites] = useFavorites();
  const isFavorited = favorites.includes(product.id);

  const handleFavoriteClick = () => {
    if (isFavorited) {
      setFavorites(favorites.filter((id) => id !== product.id));
    } else {
      setFavorites([...favorites, product.id]);
    }
  };

  return (
   <div key={product.id} className="product">
     <Link to={`/product/${product.id}`} >
       <img src={product.thumbnail} alt={product.title} />
       <div className="product-details">
         <div className="product-title">{product.title}</div>
         <div className="product-price">{product.price}</div>
       </div>
     </Link>
     <button style={{ border: "none", background: "none" }} onClick={handleFavoriteClick}>
     {isFavorited ? <HeartFilled width="24" height="24" /> : <HeartEmpty width="24" height="24" />}
       </button>
    </div>
  );
}

export default Product;
// import React from "react";
// import { Link } from "react-router-dom";
// import "./product.css";
// import { useFavorites } from "./FavProductContext";
// import {ReactComponent as HeartFilled} from './assets/heart-solid.svg';
// import {ReactComponent as HeartEmpty} from './assets/heart-regular.svg';


// function Product({ product }) {
//   const [favorites, setFavorites] = useFavorites();
//   const isFavorited = favorites.includes(product.id);

//   const handleFavoriteClick = () => {
//     if (isFavorited) {
//       setFavorites(favorites.filter((id) => id !== product.id));
//     } else {
//       setFavorites([...favorites, product.id]);
//     }
//   };

//   return (
//    <div key={product.id} className="product">
//      <Link to={`/product/${product.id}`} >
//        <img src={product.image} alt={product.title} />
//        <div className="product-details">
//          <div className="product-title">{product.title}</div>
//          <div className="product-price">{product.price}</div>
//        </div>
//      </Link>
//      <button style={{ border: "none", background: "none" }} onClick={handleFavoriteClick}>
//      {isFavorited ? <HeartFilled width="24" height="24" /> : <HeartEmpty width="24" height="24"  />}
//        </button>
//     </div>
//   );
// }

// export default Product;
