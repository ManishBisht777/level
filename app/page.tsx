"use client";

import Country from "@/components/country-card";
import Filter from "@/components/filter";
import Hero from "@/components/hero";
import { Skeleton } from "@/components/ui/skeleton";
import useCountry from "@/hooks/useCountry";
import { useCountryStore } from "@/store/country";
import { SearchX } from "lucide-react";

const apiUrl =
  "https://restcountries.com/v3.1/name/ee?fields=name,capital,region,subregion,flags,currencies,ccn3";

export default function Home() {
  // * fetching initial data
  const { loading } = useCountry({
    initialApiUrl: apiUrl,
  });

  // * get the filtered data from the store
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
          <>
            {!loading ? (
              <div className="flex gap-2 items-center">
                <SearchX className="w-24 h-24" />
                <h1 className="md:text-2xl text-xl">Opps No results</h1>
              </div>
            ) : (
              <div className="flex gap-3 flex-wrap justify-center">
                <Skeleton className="w-80 h-52 rounded-xl" />
                <Skeleton className="w-80 h-52 rounded-xl" />
                <Skeleton className="w-80 h-52 rounded-xl" />
                <Skeleton className="w-80 h-52 rounded-xl" />
                <Skeleton className="w-80 h-52 rounded-xl" />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
