import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const abortController = new AbortController();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const currencyKey = currency.toLowerCase();
      let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyKey}.json`;
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const result = await response.json();
        const currencyData = result[currencyKey];
        if (!currencyData)
          throw new Error(`Currency data not found for ${currencyKey} code`);
        setData(currencyData);
      } catch (error) {
        if (error !== "AbortError") {
          setError(error.message);
          setData({});
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (currency) fetchData();
    return () => abortController.abort();
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
