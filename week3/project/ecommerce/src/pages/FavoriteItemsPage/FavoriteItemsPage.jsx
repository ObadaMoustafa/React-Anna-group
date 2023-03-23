import React, { useContext } from 'react'
import { FavoriteIdItemContext } from '../../contexts/FavoriteIdItemContext';

export default function FavoriteItemsPage() {
   const { idFavoriteItem } = useContext(FavoriteIdItemContext);
   console.log(idFavoriteItem)
   return (
      <div>
         hello world!
      </div>
   )
}
