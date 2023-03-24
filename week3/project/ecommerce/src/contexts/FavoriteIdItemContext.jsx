import React, { createContext, useState } from 'react'

export const FavoriteIdItemContext = createContext();

export function FavoriteIdItemContextProvider(props) {
   const [idFavoriteItems, setIdFavoriteItems] = useState([]);

   return (
      <FavoriteIdItemContext.Provider value={{ idFavoriteItems, setIdFavoriteItems }}>
         {props.children}
      </FavoriteIdItemContext.Provider>
   )
}
