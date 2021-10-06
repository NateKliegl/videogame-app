import React, { useContext } from "react";
import { HeroContext } from "../shared/HeroContext";
import DisplayPage from "./DisplayPage";

function FavoritesPage() {
  const { user, deleteFavorite, favorites } = useContext(HeroContext);

  return (
    <div>
      <div>{user}</div>
    </div>
  );
}

export default FavoritesPage;
