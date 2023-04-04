import React from "react";
import { useFavorites } from "./FavProductContext";
import {ReactComponent as HeartFilled} from './assets/heart-solid.svg';
import {ReactComponent as HeartEmpty} from './assets/heart-regular.svg';

function ProductAllInfo({ product }) {
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
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-details">
        <div className="product-title">{product.title}</div>
        <div className="product-price">{product.price}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-category">{product.category}</div>
        <div className="product-rating">
          Rating: {product.rating} ({product.ratingCount} reviews)
        </div>
      </div>
      <button style={{ border: "none", background: "none" }} onClick={handleFavoriteClick}>
        {isFavorited ? <HeartFilled width="24" height="24" /> : <HeartEmpty width="24" height="24"  />}
       </button>
    </div>
    
  );
}

export default ProductAllInfo;
// import React from "react";
// import { useFavorites } from "./FavProductContext";
// import {ReactComponent as HeartFilled} from './assets/heart-solid.svg';
// import {ReactComponent as HeartEmpty} from './assets/heart-regular.svg';

// function ProductAllInfo({ product }) {
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
//     <div className="product">
//       <img src={product.image} alt={product.title} />
//       <div className="product-details">
//         <div className="product-title">{product.title}</div>
//         <div className="product-price">{product.price}</div>
//         <div className="product-description">{product.description}</div>
//         <div className="product-category">{product.category}</div>
//         <div className="product-rating">
//           Rating: {product.rating.rate} ({product.rating.count} reviews)
//         </div>
//       </div>
//       <button style={{ border: "none", background: "none" }} onClick={handleFavoriteClick}>
//         {isFavorited ? <HeartFilled width="24" height="24" /> : <HeartEmpty width="24" height="24"  />}
//        </button>
//     </div>
    
//   );
// }

// export default ProductAllInfo;
