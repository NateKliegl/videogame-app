import React, { useEffect, useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import DisplayPage from "./DisplayPage";
import { HeroContext } from "../shared/HeroContext";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const { data, error, loading } = useFetch(query);
  const { addFavorite, deleteFavorite, user, favorites, search, setSearch } =
    useContext(HeroContext);

  useEffect(() => {
    if (data) {
      setSearch(data);
    }
  }, [data, setSearch]);

  return (
    <div>
      <div>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          value={queryInput}
          placeholder="Search Your Favorite Hero"
          onChange={(e) => setQueryInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setQuery(queryInput);
            }
          }}
        ></input>
      </div>
      <button onClick={(e) => setQuery(queryInput)}>Search</button>

      <div>
        {loading && <div>LOADING PLEASE WAIT</div>}
        {error && !loading && <div>{error}</div>}
        {data &&
          !loading &&
          data.map((val) => (
            <DisplayPage
              id={val.id}
              key={val.id}
              deleteFavorite={deleteFavorite}
              addFavorite={addFavorite}
              isFavorite={favorites.some((fave) => fave.id === val.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default SearchPage;
