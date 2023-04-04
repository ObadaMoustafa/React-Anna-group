import { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext([]);

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={[favorites, setFavorites]}>
      {children}
    </FavoritesContext.Provider>
  );
};