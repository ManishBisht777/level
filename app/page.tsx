"use client";

import Country from "@/components/country-card";
import Filter from "@/components/filter";
import Hero from "@/components/hero";
import useCountry from "@/hooks/useCountry";
import { useCountryStore } from "@/store/country";

const apiUrl =
  "https://restcountries.com/v3.1/name/ee?fields=name,capital,region,subregion,flags,currencies,ccn3";

export default function Home() {
  //inital api call
  const { loading } = useCountry({
    initialApiUrl: apiUrl,
  });

  //get the filtered data from the store
  const { filteredData } = useCountryStore();

  return (
    <main className="container flex min-h-screen flex-col items-center py-6">
      <Hero />
      <Filter />
      <div className="w-full flex gap-5 flex-wrap justify-center mt-10">
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
