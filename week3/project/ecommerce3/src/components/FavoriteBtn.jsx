import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
// import regularHeart from "../assets/heart-regular.svg";
// import activeHeart from "../assets/heart-solid.svg";
import { ReactComponent as RegularHeart } from "../assets/heart-regular.svg";
import { ReactComponent as ActiveHeart } from "../assets/heart-solid.svg";
import "./components-css/btn.css";

const FavoriteBtn = (itemId) => {
  const { favoriteList, setFavoriteList, favoriteItem, setFavoriteItem } =
    useContext(FavoriteContext);
  const isFavoriteItem = favoriteList.includes(itemId);

  function favoriteHandler() {
    if (!isFavoriteItem) {
      setFavoriteList([...favoriteList, itemId]);
      // setFavoriteItem(true);
      // setHeart(activeHeart);
    } else {
      setFavoriteList(favoriteList.filter((item) => item !== itemId));
      // setFavoriteItem(false)
      // setHeart(regularHeart);
    }
    console.log("click", itemId, favoriteList);
  }
  // const heart = isFavoriteItem ? activeHeart : regularHeart;

  console.log("result", favoriteList);
  console.log(isFavoriteItem, itemId, favoriteList);

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
// const changeFavoriteList = () => {}
//

// Add works from second click
// function addToFavorites() {
//   setFavoriteList((prevFavoriteList) => [...prevFavoriteList, { itemId }]);
// }

// function removeFromFavorites() {
//   setFavoriteList(favoriteList.filter((item) => item.itemId !== itemId));
// }

// function favoriteHandler() {
//   if (!isFavoriteItem) {
//     addToFavorites();
//   } else removeFromFavorites();

//   isFavoriteItem ? console.log("like") : console.log("dislike");
//   console.log("click", itemId, favoriteList);
// }
