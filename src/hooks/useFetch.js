import React, { useState, useEffect } from "react";

function useFetch(search) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://superheroapi.com/api/4283609898424396/search&query=${search}/name`;

    async function init() {
      if (search.length < 3) return;

      setError(null);
      setLoading(true);
      setData([]);
      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(() =>
          json.data.map((hero) => ({
            name: hero.name,
            id: hero.id,
          }))
        );
      } catch (e) {
        setError(e);
      } finally {
        setLoading(true);
      }
    }
    init();
  }, [search]);

  return { data, loading, error };
}

export default useFetch;
