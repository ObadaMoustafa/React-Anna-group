import { useContext, useEffect, useState } from 'react'
import { FavoriteIdItemContext } from '../contexts/FavoriteIdItemContext'
import svgReg from '../images/heart-regular.svg'
import svgSol from '../images/heart-solid.svg'

export default function useFavoriteItems(itemId) {

   const { idFavoriteItems, setIdFavoriteItems } = useContext(FavoriteIdItemContext)
   const [svgIcon, setSvgItem] = useState(() => idFavoriteItems.includes(itemId) ? svgSol : svgReg)

   // eslint-disable-next-line
   useEffect(() => { idFavoriteItems.includes(itemId) ? setSvgItem(svgSol) : setSvgItem(svgReg) }, [itemId])


   function favoriteIdHandler(itemId) {
      if (!idFavoriteItems.includes(itemId)) {
         setIdFavoriteItems((prev) => [...prev, itemId])
         setSvgItem(svgSol)
      }
      else {
         setIdFavoriteItems((prev) => prev.filter(id => id !== itemId))
         setSvgItem(svgReg)
      }
   }

   return ({
      svgIcon,
      favoriteIdHandler,
      idFavoriteItems
   })
}