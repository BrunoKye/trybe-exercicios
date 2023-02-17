import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const requestApi = () => {
    setLoading(true);

    fetch(url)
      .then((result) => result.json())
      .then((data) => setData(data.results))
      .catch((error) => setError(error))
      .finally(setLoading(false))
  }

  useEffect(() => {
    requestApi()
  }, []);

  return {loading, data, error, requestApi };
}
