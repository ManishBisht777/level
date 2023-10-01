import { Eye, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CountryProps {
  country: any;
}

// renders the country information
export default function Country({ country }: CountryProps) {
  return (
    <div className="flex md:flex-row flex-row-reverse flex-wrap rounded-lg border overflow-hidden relative wave group transition ease-in-out">
      <div className="group-hover:flex transition ease-in-out hidden absolute inset-0 bg-black/40 backdrop-blur z-10 text-white p-[1px] rounded-md justify-center items-center gap-1 py-3">
        <Link
          href={`/country/${country.ccn3}`}
          className="flex gap-1 items-center bg-black px-6 py-3 rounded-lg cursor-pointer"
        >
          <Eye className="w-4 h-4 " />
          View more
        </Link>
      </div>
      <div className="p-6 px-10 bg-white text-black md:w-[15rem] w-full flex flex-col justify-between">
        <div>
          <p className="text-sm">{country.region}</p>
          <p className="text-2xl font-bold break-words">
            {country.name.common}
          </p>
        </div>
        <div>
          <p className="text-center text-sm mt-2">
            Capital is <span className="text-[#e354a1]">{country.capital}</span>
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#007cf087] to-[#00dfd894] text-white p-4 flex flex-col md:w-[10rem] w-full">
        <div className="w-24 h-24 self-center bg-black rounded-full relative overflow-hidden">
          <Image
            className="object-cover"
            src={country.flags.svg}
            alt={country.name.common}
            fill
            loading="lazy"
          />
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-1 items-center text-center">
            <MapPin className="w-5 h-5" />
            <span>{country.region}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
