import { createContext, useContext, useState } from 'react';

export const FavoriteContext = createContext([]);

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={[favorite, setFavorite]}>
      {children}
    </FavoriteContext.Provider>
  );
};