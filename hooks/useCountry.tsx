import { useCountryStore } from "@/store/country";
import { useEffect, useState } from "react";

interface useCountryProps {
  initialApiUrl: string;
}

export default function useCountry({ initialApiUrl }: useCountryProps) {
  const { setInitialData, setFilteredData } = useCountryStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [apiUrl, _] = useState(initialApiUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setLoading(false);
        setInitialData(jsonData);
        setFilteredData(jsonData);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error };
}
