import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (baseURL, config) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setData(null);
    setError(null);
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(baseURL, config);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, [baseURL]);
  return { data, loading, error };
};

export default useFetch;
