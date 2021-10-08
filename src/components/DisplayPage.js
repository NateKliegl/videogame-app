import React from "react";
import { HeroContext } from "../shared/HeroContext";

function DisplayPage({
  name,
  id,
  url,
  isFavorite,
  addFavorite,
  deleteFavorite,
  strength,
  speed,
  power,
  intelligence,
  publisher,
  fullName,
  alignment,
}) {
  return (
    <div className="searchPage">
      <h2>
        {name} {id}
      </h2>
      <div className="stats">
        <h2>Statistics</h2>
        <p>{strength} Strength</p>
        <p>{speed} Speed</p>
        <p>{power} Power</p>
        <p>{intelligence} Intelligence</p>
      </div>

      <div className="biography">
        <h2>Biography</h2>
        <p>Published by {publisher}</p>
        <p>Full Name is {fullName}</p>

        <p>Alignment {alignment}</p>
      </div>

      <img src={url} alt="picture"></img>
      {!isFavorite && (
        <button onClick={() => addFavorite({ name, url })}>Add</button>
      )}
      {isFavorite && <button onClick={() => deleteFavorite(id)}>Delete</button>}
    </div>
  );
}

export default DisplayPage;
