import React, { useState, useCallback } from "react";
export const HeroContext = React.createContext(null);

export function HeroProvider(props) {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = useCallback(
    (hero) => {
      setFavorites((curr) => [...curr, hero]);
    },
    [setFavorites]
  );

  const deleteFavorite = useCallback(
    (id) => {
      setFavorites((curr) => curr.filter((val) => id !== val.id));
    },
    [setFavorites]
  );

  const clearState = useCallback(() => {
    setUser("");
    setSearch([]);
    setFavorites([]);
  }, [setUser, setSearch, setFavorites]);

  return (
    <HeroContext.Provider
      value={{
        user,
        search,
        favorites,
        addFavorite,
        deleteFavorite,
        clearState,
        setSearch,
        setUser,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
}
