import { useState } from "react";
import { createContext } from "react";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favoriteIdList, setFavoriteIdList] = useState([]);

  const sharedValue = {
    favoriteIdList,
    setFavoriteIdList,
  };

  return (
    <FavoriteContext.Provider value={sharedValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
