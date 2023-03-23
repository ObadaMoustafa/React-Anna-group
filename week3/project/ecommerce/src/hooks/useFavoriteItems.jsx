import { useState, useContext } from 'react'
import { FavoriteIdItemContext } from '../contexts/FavoriteIdItemContext';
import svgReg from '../images/heart-regular.svg'
import svgSol from '../images/heart-solid.svg';

export default function useFavoriteItems() {

   const { idFavoriteItem, setIdFavoriteItem } = useContext(FavoriteIdItemContext);
   const [svgIcon, setSvgIcon] = useState(svgReg)

   function favoriteIdHandler(itemId) {
      console.log(typeof (itemId));
      const indexOf = idFavoriteItem.indexOf(itemId);
      if (indexOf === -1) {
         setIdFavoriteItem(prevItems => [...prevItems, itemId])
         setSvgIcon(svgSol)
      }
      else {
         idFavoriteItem.splice(indexOf, 1)
         setSvgIcon(svgReg)
      }
   }

   return ({
      svgIcon,
      favoriteIdHandler,
      idFavoriteItem
   })
}