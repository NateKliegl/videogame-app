import { useState, useEffect } from "react";

function useFetch(search) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://superheroapi.com/api.php/4283609898424396/search/${search}/image/powerstats/biography`;

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

            alignment: hero.biography.alignment,
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

export default useFetch;
