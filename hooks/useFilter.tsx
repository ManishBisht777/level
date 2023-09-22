"use client";

import { useCountryStore } from "@/store/country";
import { useEffect, useState } from "react";

interface FilterProps {
  inputValue: string;
}

export default function useFilter({ inputValue }: FilterProps) {
  const [loading, setLoading] = useState(false);
  const { setFilteredData, initialData } = useCountryStore();

  useEffect(() => {
    if (!inputValue) return;

    try {
      (async () => {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${inputValue}?fields=name,capital,region,subregion,flags`
        );
        const jsonData = await response.json();
        setFilteredData(jsonData);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [inputValue]);

  return { loading };
}
