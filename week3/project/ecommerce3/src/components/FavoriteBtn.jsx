import React from "react";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
// import regularHeart from "../assets/heart-regular.svg";
// import activeHeart from "../assets/heart-solid.svg";
import { ReactComponent as RegularHeart } from "../assets/heart-regular.svg";
import { ReactComponent as ActiveHeart } from "../assets/heart-solid.svg";
import "./components-css/btn.css";

const FavoriteBtn = (itemId) => {
  const { favoriteIdList, setFavoriteIdList } = useContext(FavoriteContext);
  const isFavoriteItem = favoriteIdList.includes(itemId);

  function favoriteHandler() {
    const isFavoriteItem = favoriteIdList.includes(itemId);
    if (!isFavoriteItem) {
      setFavoriteIdList([...favoriteIdList, itemId]);
    } else {
      setFavoriteIdList(favoriteIdList.filter((item) => item !== itemId));
    }
  }
  // const heart = isFavoriteItem ? activeHeart : regularHeart;
  // console.log("result", favoriteList);
  // console.log(isFavoriteItem, itemId, favoriteList);

  return (
    <button className="favorite-btn" onClick={favoriteHandler}>
      {/* <img className="" src={heart} alt="heart" width={"20"} /> */}
      {isFavoriteItem ? (
        <ActiveHeart className="heart" />
      ) : (
        <RegularHeart className="heart" />
      )}
    </button>
  );
};
export default FavoriteBtn;
