import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url, method, body = null) {
  const [json, setJson] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      if (!url || (method === "post" && !body)) {
        return;
      }

      setError(null);
      setLoading(true);
      setJson(null);
      try {
        const response = await axios[method](url, body);
        setJson(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url, body, method]);

  return { json, loading, error };
}

export default useAxios;

// if (json.response === "error"){
//setError(json.error)
//}
