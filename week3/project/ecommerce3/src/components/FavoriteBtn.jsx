import React from "react";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import regularHeart from "../assets/heart-regular.svg";
import activeHeart from "../assets/heart-solid.svg";
// import { ReactComponent as RegularHeart } from "../assets/heart-regular.svg";
// import { ReactComponent as ActiveHeart } from "../assets/heart-solid.svg";
import "./components-css/btn.css";

const FavoriteBtn = (id) => {
  const productId = id.itemId;

  const { favoriteIdList, setFavoriteIdList } = useContext(FavoriteContext);

  const isFavoriteItem = favoriteIdList.includes(productId);
  // console.log(isFavoriteItem);
  const heart = isFavoriteItem ? activeHeart : regularHeart;
  function favoriteHandler() {
    if (!isFavoriteItem) {
      setFavoriteIdList([...favoriteIdList, productId]);
    } else {
      setFavoriteIdList(favoriteIdList.filter((item) => item !== productId));
    }
  }

  return (
    <button className="favorite-btn" onClick={favoriteHandler}>
      <img className="heart" src={heart} alt="heart" />

      {/* {isFavoriteItem ? (
        <ActiveHeart className="heart" />
      ) : (
        <RegularHeart className="heart" />
      )} */}
    </button>
  );
};
export default FavoriteBtn;
