import { useState } from "react";
import { createContext } from "react";
import regularHeart from "../assets/heart-regular.svg";
import activeHeart from "../assets/heart-solid.svg";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([]);
  // const isFavoriteItem = favoriteList.includes(itemId);
  const [favoriteItem, setFavoriteItem] = useState();
  const sharedValue = {
    favoriteList,
    setFavoriteList,
    favoriteItem,
    setFavoriteItem,
    // heart,
    // setHeart,
  };

  return (
    <FavoriteContext.Provider value={sharedValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
