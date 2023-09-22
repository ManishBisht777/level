"use client";

import Country from "@/components/country-card";
import Filter from "@/components/filter";
import useCountry from "@/hooks/useCountry";
import { useCountryStore } from "@/store/country";

export default function Home() {
  const apiUrl =
    "https://restcountries.com/v3.1/name/ee?fields=name,capital,region,subregion,flags";

  const { loading } = useCountry({
    initialApiUrl: apiUrl,
  });

  const { filteredData } = useCountryStore();

  return (
    <main className="container flex min-h-screen flex-col items-center py-6">
      <Filter />
      <div className="w-full flex gap-4 flex-wrap justify-center mt-10">
        {filteredData.length ? (
          filteredData.map((country: any, index: number) => {
            return <Country key={index} country={country} />;
          })
        ) : (
          <div>
            <h1>Opps No results</h1>
          </div>
        )}
      </div>
    </main>
  );
}
