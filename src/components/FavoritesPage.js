import React, { useContext } from "react";
import { HeroContext } from "../shared/HeroContext";
import DisplayPage from "./DisplayPage";

function FavoritesPage() {
  const { user, deleteFavorite, favorites } = useContext(HeroContext);

  return (
    <div>
      <div>{user}</div>
      {favorites.map((val) => (
        <DisplayPage
          hero={val}
          key={val.id}
          deleteFavorite={deleteFavorite}
          id={val.id}
          isFavorite={true}
        />
      ))}
    </div>
  );
}

export default FavoritesPage;
