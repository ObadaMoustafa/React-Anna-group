import { useFavorite } from './FavouriteProductsContext';
import { useState, useEffect } from 'react';


const Favorite = () => {
  const [favorite] = useFavorite();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all(
      favorite.map((id) =>
        fetch(`https://dummyjson.com/products${id}`).then((response) =>
          response.json()
        )
      )
    ).then(setProducts);
  }, [favorite]);

  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
            {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Favorite;