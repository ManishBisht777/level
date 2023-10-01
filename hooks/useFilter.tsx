"use client";

import { useCountryStore } from "@/store/country";
import { useEffect, useState } from "react";

interface FilterProps {
  inputValue: string;
  region: string;
}

export default function useFilter({ inputValue, region }: FilterProps) {
  const [loading, setLoading] = useState(false);

  const { setFilteredData, initialData } = useCountryStore();

  useEffect(() => {
    // * If there is no input value and there is a region, filter the initialData by region

    if (!inputValue && region && initialData) {
      const filteredData: any = initialData.filter(
        (country: any) => country.region === region
      );
      setFilteredData(filteredData || []);
      return;
    }

    // * when the user clears the input value or on initial page load set the filtered data to the initial data
    if (!inputValue && initialData) {
      setFilteredData(initialData);
      return;
    }

    // * on initial load when there is no initialData
    if (!inputValue) return;

    try {
      (async () => {
        setLoading(true);

        let apiUrl = `https://restcountries.com/v3.1/name/${inputValue}?fields=name,capital,region,subregion,flags,currency,ccn3`;
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        let filteredData;
        if (region && jsonData.length) {
          filteredData = jsonData.filter(
            (country: any) => country.region === region
          );
        }

        setFilteredData(filteredData || jsonData);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [inputValue, region]);

  return { loading };
}
