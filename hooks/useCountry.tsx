import { useCountryStore } from "@/store/country";
import { useEffect, useState } from "react";

interface useCountryProps {
  initialApiUrl: string;
}

export default function useCountry({ initialApiUrl }: useCountryProps) {
  // functions from the useCountryStore to set the initial data and filtered data
  const { setInitialData, setFilteredData } = useCountryStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [apiUrl, _] = useState(initialApiUrl);

  useEffect(() => {
    // fetch data from the apiUrl and set the initial data and filtered data
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
        // Handle any errors that occur during the fetch
        setError(err);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  // Return loading and error states
  return { loading, error };
}
