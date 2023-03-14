import {useState, useEffect} from "react";

function useFetch<Type>(endpoint: string) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(endpoint, {signal: abortCont.signal})
        .then(response => {
          if (response.ok) return response.json();

          throw Error('Could not fetch data for that resource')
        })
        .then((data: Type) => {
          setError(null);
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name == 'AbortError') {return }
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);

    return () => {
      abortCont.abort();
    };
  }, []);

  return {
    data: data,
    isPending: isPending,
    error: error
  }
};

export default useFetch;
