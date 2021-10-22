import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
export const HeroContext = React.createContext(null);

export function HeroProvider(props) {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getFaves() {
      const { data } = await axios.get(`/api/favorites/user`);
      if (!data.success) return;
      setFavorites(data.data);
    }
    if (user.username) {
      getFaves();
    }
  }, [user]);

  useEffect(() => {
    async function verify() {
      try {
        const { data: json } = await axios.get("/api/users/verify");
        if (json.success) {
          setUser(json.data);
        }
      } catch (e) {}
    }
    verify();
  }, []);

  const addFavorite = useCallback(
    async (hero) => {
      const { data } = await axios.post("/api/favorites/add", {
        ...hero,
      });
      setFavorites((curr) => {
        return [...curr, data.data];
      });
    },
    [setFavorites, user]
  );

  const deleteFavorite = useCallback(
    async (id) => {
      const { data } = await axios.delete(`/api/favorites/delete/${id}`);
      setFavorites((curr) => {
        return curr.filter((val) => val.hero_id != data.data);
      });
    },
    [setFavorites]
  );

  const clearState = useCallback(async () => {
    try {
      await axios.get("/api/users/logout");
      setUser({});
      setSearch([]);
      setFavorites([]);
    } catch (e) {}
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
