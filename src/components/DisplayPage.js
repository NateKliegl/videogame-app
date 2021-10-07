import React from "react";

function DisplayPage({
  name,
  id,
  url,
  isFavorite,
  addFavorite,
  deleteFavorite,
}) {
  return (
    <div>
      <h3>
        {name} {id}
      </h3>
      <img src={url} alt="picture"></img>
      {!isFavorite && (
        <button onClick={() => addFavorite({ name })}>Add</button>
      )}
      {isFavorite && (
        <button onClick={() => deleteFavorite({ id })}>Delete</button>
      )}
    </div>
  );
}

export default DisplayPage;
