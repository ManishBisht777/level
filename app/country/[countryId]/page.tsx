import SimilarCountries from "@/components/similar-countries";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    countryId: string;
  };
}

async function getCountryById(countryId: string) {
  if (!countryId) {
    return;
  }

  // fetch country data based on country id (ccn3)
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryId}`,
    { next: { revalidate: 3600 } } // revalidate every hour
  );
  return response.json();
}

export default async function page({ params: { countryId } }: PageProps) {
  const countryData = await getCountryById(countryId);
  if (!countryData) notFound();

  const {
    name,
    flags,
    currencies,
    capital,
    subregion,
    languages,
    timezones,
    area,
    region,
    population,
  } = countryData[0];

  return (
    <main className="container py-10">
      <section className="md:min-h-[40vh]">
        <div className="text-center md:my-10 my-5">
          <p className="md:text-base text-xs">{subregion}</p>
          <h1 className="text-2xl bg-clip-text text-transparent md:text-4xl lg:text-8xl font-extrabold bg-gradient-to-br from-[#ff4d4d] to-[#f9cb28]">
            {name?.common}
          </h1>
        </div>

        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <p className="md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#007cf0] to-[#00dfd8] ">
              {area}
            </p>
            <p className="md:text-base text-xs">Area</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="md:text-2xl text-white font-bold">{population}</p>
            <p className="md:text-base text-xs">Population</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff4d4d] to-[#f9cb28] ">
              {Object.values(languages).length}
            </p>
            <p className="md:text-base text-xs">Languages</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center min-h-screen justify-center mt-10">
        <h2 className="md:text-5xl text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-center">
          Some More information
        </h2>

        <div className="md:grid md:grid-cols-3 md:grid-rows-3 flex flex-col gap-4 w-[60vw] h-[90vh] mt-10">
          <div className="col-start-2 row-start-1 bg-gradient-to-t from-gray-600  to-gray-900 rounded-md relative p-6">
            <div className="flex justify-between h-full">
              <div className="flex flex-col">
                <p className="md:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff4d4d] to-[#f9cb28]">
                  Capital
                </p>
                <p className="md:text-base text-sm text-white/80">{capital}</p>
              </div>
              <Image
                src="/capital.svg"
                width={100}
                height={100}
                alt="capital"
                className="self-end"
              />
            </div>
          </div>
          <div className="col-start-3 row-start-1 bg-gradient-to-r from-gray-600  to-gray-900 rounded-md p-6 flex-row-reverse">
            <div className="flex justify-between h-full">
              <div className="flex flex-col">
                <p className="md:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#007cf0] to-[#00dfd8]">
                  Flags
                </p>
                <p className="md:text-base text-sm text-white/80">
                  {name?.common}
                </p>
              </div>
              <Image
                className="self-end rounded-lg"
                src={flags?.svg}
                width={100}
                height={100}
                alt="flags"
              />
            </div>
          </div>
          <div className="row-span-2 col-start-1 row-start-1 bg-gradient-to-tr from-gray-600  to-gray-900 rounded-xl relative p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="md:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#007cf0] to-[#00dfd8]">
                  Common Name
                </p>
                <p className="md:text-base text-sm text-white/80">
                  {name?.common}
                </p>
              </div>
              <Image
                className="self-end md:w-48 md:h-48 w-24 h-24"
                src="/name.svg"
                width={200}
                height={200}
                alt="hashtag"
              />
            </div>
          </div>
          <div className="col-span-2 col-start-2 bg-gradient-to-br from-gray-600  to-gray-900 rounded-md p-6">
            <div className="flex flex-wrap justify-between h-full">
              <div>
                <p className="md:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ba83f1c8] to-[#fb47a1ca]">
                  Currency
                </p>
                <p className="md:text-base text-sm text-white/80">
                  {Object.values(currencies)
                    .map(({ symbol, name }: any) => `${name} (${symbol})`)
                    .join(", ")}
                </p>
              </div>
              <Image
                className="self-end md:w-36 md:h-36 w-24 h-24"
                src="/currency.svg"
                width={150}
                height={150}
                alt="currency"
              />
            </div>
          </div>
          <div className="col-span-2 row-start-3 bg-gradient-to-b from-gray-600  to-gray-900 rounded-md p-6">
            <div className="flex flex-wrap justify-between h-full">
              <div>
                <p className="md:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff4d4d] to-[#f9cb28]">
                  Languages
                </p>
                <p className="md:text-base text-sm text-white/80">
                  {Object.values(languages)
                    .map((name) => name)
                    .join(", ")}
                </p>
              </div>
              <Image
                className="self-end md:w-36 md:h-36 w-24 h-24"
                src="/lang.svg"
                width={150}
                height={150}
                alt="language"
              />
            </div>
          </div>
          <div className="col-start-3 row-start-3 bg-gradient-to-bl from-gray-600  to-gray-900 rounded-md p-6">
            <div className="flex flex-wrap justify-between h-full">
              <div>
                <p className="md:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff4d4d] to-[#f9cb28]">
                  Timezones
                </p>
                <p className="md:text-base text-sm text-white/80">
                  {Object.values(timezones)
                    .map((name) => name)
                    .join(", ")}
                </p>
              </div>
              <Image
                className="self-end"
                src="/time.svg"
                width={100}
                height={100}
                alt="timezone"
              />
            </div>
          </div>
        </div>
      </section>
      <SimilarCountries region={subregion} />
    </main>
  );
}
