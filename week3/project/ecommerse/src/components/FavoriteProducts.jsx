import { useFavorite } from './FavouriteProductsContext';
import { useState, useEffect, useParams } from 'react';
import "../components/Style/Favorite-product.css"

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
      <h1 className='fatourite-title'>Favorites</h1>
      <ul className="favorite-product">
        {products && products.map((product) => (
          <li className='favorite-item-list' key={product.id}>
            <img
              src={product.images[0]}
              alt={product.title}
            />
            {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Favorite;