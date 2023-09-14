import { useState, useEffect } from "react";
import makeRequest from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoaoding] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaoding(true);
        const response = await makeRequest.get(url);
        setData(response.data.data);
      } catch (error) {
        setError(true);
      }
      setLoaoding(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
