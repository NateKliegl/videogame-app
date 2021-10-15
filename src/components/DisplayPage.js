import React from "react";

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
  firstShow,
  birth,
  gender,
  race,
  height,
  weight,
}) {
  return (
    <div className="searchPage">
      <h2>{name}</h2>
      <img src={url} alt="picture"></img>
      {!isFavorite && (
        <button
          onClick={() => addFavorite({ url, name, id })}
          className="addButton"
        >
          Add
        </button>
      )}
      {isFavorite && (
        <button onClick={() => deleteFavorite(id)} className="deleteButton">
          Delete
        </button>
      )}
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
        <p>First Appearance was {firstShow}</p>
        <p>
          {name} place of birth was {birth}
        </p>
      </div>
      <div className="physical">
        <h2>Physical Features</h2>
        <p>Gender: {gender}</p>
        <p>Race: {race}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
      </div>
    </div>
  );
}

export default DisplayPage;
