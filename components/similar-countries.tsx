import { notFound } from "next/navigation";
import Country from "./country-card";

interface SimilarCountriesProps {
  region: string;
}

async function getCountryByRegion(region: string) {
  if (!region) {
    return;
  }

  // fetch countries in the same region
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`,
    { next: { revalidate: 3600 } } // * revalidate every hour
  );
  return response.json();
}

export default async function SimilarCountries({
  region,
}: SimilarCountriesProps) {
  const similarCountries = await getCountryByRegion(region);

  if (!similarCountries) notFound();

  return (
    <section className="mt-28">
      <h2 className="md:text-5xl text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007cf0] to-[#00dfd8]">
        Countries in same region
      </h2>
      <div className="w-full flex gap-5 flex-wrap justify-center mt-10">
        {similarCountries.map((country: any) => {
          return <Country key={country.ccn3} country={country} />;
        })}
      </div>
    </section>
  );
}
