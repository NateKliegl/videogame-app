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
      <div className="searchBar">
        <label htmlFor="search" className="user">
          {user}
        </label>
        <input
          id="search"
          value={queryInput}
          placeholder="Search Your Favorite Hero/Villain"
          onChange={(e) => setQueryInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setQuery(queryInput);
            }
          }}
        ></input>
      </div>
      <button onClick={(e) => setQuery(queryInput)} className="searchButton">
        Search
      </button>

      <div>
        {loading && <div>LOADING PLEASE WAIT</div>}
        {error && !loading && <div>{error}</div>}
        {search &&
          !loading &&
          search.map((val) => (
            <DisplayPage
              id={val.id}
              key={val.id}
              deleteFavorite={deleteFavorite}
              addFavorite={addFavorite}
              isFavorite={favorites.some((fave) => fave.id === val.id)}
              url={val.url}
              name={val.name}
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
    </div>
  );
}

export default SearchPage;
