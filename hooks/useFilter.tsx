"use client";

import { useCountryStore } from "@/store/country";
import { useEffect, useState } from "react";

// Define the props interface for useFilter
interface FilterProps {
  inputValue: string;
}

export default function useFilter({ inputValue }: FilterProps) {
  const [loading, setLoading] = useState(false);

  // Access the setFilteredData function from the country store
  const { setFilteredData } = useCountryStore();

  // Define an effect that runs when inputValue changes to fetch data and set the filtered data
  useEffect(() => {
    if (!inputValue) return;

    try {
      (async () => {
        setLoading(true);

        const response = await fetch(
          `https://restcountries.com/v3.1/name/${inputValue}?fields=name,capital,region,subregion,flags,currency,ccn3`
        );
        const jsonData = await response.json();
        setFilteredData(jsonData);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [inputValue]); // Re-run the effect whenever inputValue changes

  // Return the loading state to indicate whether data is being fetched
  return { loading };
}
