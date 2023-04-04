import { useState, useEffect } from "react";

function useFetch (url) {
  const [data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
   
    setLoading(true);
    setError(null);

    fetch (url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);  
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        let errorCode = "";
          if (error.response && error.response.status) {
            errorCode = error.response.status;
          } else if (error.request) {
            errorCode = "NETWORK_ERROR";
          } else {
            errorCode = "UNKNOWN_ERROR";
          }
          switch (errorCode) {
            case 404:
              setError("Products data not found.");
              break;
            case "NETWORK_ERROR":
              setError("Network error. Please check your internet connection and try again.");
              break;
            case "UNKNOWN_ERROR":
              setError("Unknown error occurred. Please try again later.");
              break;
            default:
              setError("Failed to load data. Please, try again later");
          }   
       });
  }, [url]);



  return {data, loading, error};
}

export default useFetch;

