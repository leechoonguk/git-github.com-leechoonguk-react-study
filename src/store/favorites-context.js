import React from "react";
import { createContext, useState } from "react";

const FacoritesContext = createContext({
  favorites: [],
  total: 0,
  addFavorite: (meetup) => {}
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  function addFavoriteHandler(meetup){
    setFavorites((pre)=>{
        return pre.concat(meetup);
    });
  }
  
  const context = {
    favorites: favorites,
    total: favorites.length,
    addFavorite: addFavoriteHandler
  };
  return (
    <FacoritesContext.Provider value={context}>
      {props.children}
    </FacoritesContext.Provider>
  );
}

export default FacoritesContext;
