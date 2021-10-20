import React, { useEffect, useState, useContext } from "react";
import useAxios from "../hooks/useAxios";
import DisplayPage from "./DisplayPage";
import { HeroContext } from "../shared/HeroContext";

const heroURL = `https://superheroapi.com/api.php/4283609898424396/search/image/powerstats/biography/appearance`;

function SearchPage() {
  const { addFavorite, deleteFavorite, user, favorites, search, setSearch } =
    useContext(HeroContext);

  const [query, setQuery] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const { json, error, loading } = useAxios(query);

  useEffect(() => {
    if (json) {
      setSearch(() =>
        json.results.map((hero) => ({
          name: hero.name,
          id: hero.id,
          url: hero.image.url,
          strength: hero.powerstats.strength,
          speed: hero.powerstats.speed,
          power: hero.powerstats.power,
          intelligence: hero.powerstats.intelligence,
          publisher: hero.biography.publisher,
          fullName: hero.biography["full-name"],
          firstShow: hero.biography["first-appearance"],
          birth: hero.biography["place-of-birth"],
          alignment: hero.biography.alignment,
          gender: hero.appearance.gender,
          race: hero.appearance.race,
          height: hero.appearance.height,
          weight: hero.appearance.weight,
        }))
      );
    }
  }, [json, setSearch]);

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
      <button
        onClick={() => setQuery(heroURL + queryInput)}
        className="searchButton"
      >
        Search
      </button>

      <div>
        {loading && <div>LOADING PLEASE WAIT</div>}
        {error && !loading && <div>{error}</div>}
        {search &&
          !loading &&
          search.map((val) => (
            <DisplayPage
              hero_id={val.hero_id}
              key={val.hero_id}
              deleteFavorite={deleteFavorite}
              addFavorite={addFavorite}
              isFavorite={favorites.some(
                (fave) => fave.hero_id === val.hero_id
              )}
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
