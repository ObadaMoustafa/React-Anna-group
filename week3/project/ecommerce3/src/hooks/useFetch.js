import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [errorObj, setErrorObj] = useState({ isError: null, msg: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function performFetch(url) {
    try {
      setIsLoading(true);
      setErrorObj([]);
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          `Error happened: ${response.status} ${response.statusText}`
        );
      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      setErrorObj({ isError: true, msg: error.message });
    } finally {
      setIsLoading(false);
    }
  }
  return { data, errorObj, isLoading, performFetch };
};
