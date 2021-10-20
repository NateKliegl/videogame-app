import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url, method, body = null) {
  const [json, setJson] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://superheroapi.com/api.php/4283609898424396/search/${search}/image/powerstats/biography/appearance`;

    async function init() {
      if (search.length < 3) return;

      setError(null);
      setLoading(true);
      setData([]);
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        setData(() =>
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
      } catch (e) {
        console.log(e);
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [search]);

  return { data, loading, error };
}

export default useAxios;

// if (json.response === "error"){
//setError(json.error)
//}
