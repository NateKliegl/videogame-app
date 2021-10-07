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
}) {
  return (
    <div>
      <h2>
        {name} {id}
      </h2>
      <h2>Statistics</h2>
      <p>{strength} Strength</p>
      <p>{speed} Speed</p>

      <img src={url} alt="picture"></img>
      {!isFavorite && (
        <button onClick={() => addFavorite({ name })}>Add</button>
      )}
      {isFavorite && <button onClick={() => deleteFavorite(id)}>Delete</button>}
    </div>
  );
}

export default DisplayPage;
