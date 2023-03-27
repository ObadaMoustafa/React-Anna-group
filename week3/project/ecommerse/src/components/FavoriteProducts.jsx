import { useFavorite } from './FavouriteProductsContext';
import { useState, useEffect, useParams } from 'react';


const Favorite = () => {
  // const {prodId} = useParams();
  const [favorite] = useFavorite();
  const [products, setProducts] = useState([]);
 console.log(favorite)
  useEffect(() => {
    Promise.all(
      favorite.map((id) =>
        fetch(`https://dummyjson.com/products/${id}`).then((response) =>
          response.json()
        )
      )
    ).then(setProducts);
  }, [favorite]);

  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {products && products.map((product) => (
          <li key={product.id}>
            <img
              src={product.images[0]}
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