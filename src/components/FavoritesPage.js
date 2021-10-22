import React, { useContext } from "react";
import { HeroContext } from "../shared/HeroContext";
import DisplayPage from "./DisplayPage";

function FavoritesPage() {
  const { user, deleteFavorite, favorites } = useContext(HeroContext);

  return (
    <div>
      <div className="user">{user.username}</div>
      {favorites.map((val) => (
        <DisplayPage
          hero={val}
          name={val.name}
          key={val.hero_id}
          deleteFavorite={deleteFavorite}
          hero_id={val.hero_id}
          isFavorite={true}
          url={val.url}
          strength={val.strength}
          speed={val.speed}
          power={val.power}
          intelligence={val.intelligence}
          publisher={val.publisher}
          alignment={val.alignment}
          fullName={val.fullName}
          firstShow={val.firstShow}
          birth={val.birth}
          gender={val.gender}
          race={val.race}
          height={val.height}
          weight={val.weight}
        />
      ))}
    </div>
  );
}

export default FavoritesPage;
