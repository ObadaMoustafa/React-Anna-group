import { useContext } from 'react'
import { FavoriteIdItemContext } from '../contexts/FavoriteIdItemContext';
import svgReg from '../images/heart-regular.svg'
import svgSol from '../images/heart-solid.svg';

export default function useFavoriteItems(item) {

   const { idFavoriteItems, setIdFavoriteItems } = useContext(FavoriteIdItemContext);

   let svgIcon = idFavoriteItems.includes(item) ? svgSol : svgReg;

   function favoriteIdHandler(itemId) {
      if (!idFavoriteItems.includes(itemId)) {
         setIdFavoriteItems((prev) => [...prev, itemId])
         svgIcon = svgSol;
      }
      else {
         setIdFavoriteItems((prev) => prev.filter(id => id !== itemId))
         svgIcon = svgReg
      }
   }

   return ({
      svgIcon,
      favoriteIdHandler,
      idFavoriteItems
   })
}