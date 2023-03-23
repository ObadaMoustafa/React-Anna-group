import React, { createContext, useState } from 'react'

export const FavoriteIdItemContext = createContext();

export function FavoriteIdItemContextProvider(props) {
   const [idFavoriteItem, setIdFavoriteItem] = useState([]);

   return (
      <FavoriteIdItemContext.Provider value={{ idFavoriteItem, setIdFavoriteItem }}>
         {props.children}
      </FavoriteIdItemContext.Provider>
   )
}
