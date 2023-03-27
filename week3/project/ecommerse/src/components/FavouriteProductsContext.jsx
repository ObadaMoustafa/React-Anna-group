import { createContext, useContext, useState, useEffect } from 'react';

export const FavoriteContext = createContext([]);

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
 useEffect(() => {
   console.log(favorite)
 }, [])
 
  return (
    <FavoriteContext.Provider value={[favorite, setFavorite]}>
      {children}
    </FavoriteContext.Provider>
  );
};