import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CountryProps {
  country: any;
}

export default function Country({ country }: CountryProps) {
  return (
    <div className="max-w-[15rem]">
      <Card>
        <CardHeader>
          <CardTitle className="truncate">{country.name.common}</CardTitle>
          <CardDescription className="truncate">
            {country.region} {" - "} {country.subregion}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded object-contain aspect-[3/2]"
            src={country.flags.svg}
            width={200}
            height={150}
            alt={country.name.common}
            loading="lazy"
          />
        </CardContent>
        <CardFooter>
          <div className="flex gap-4 items-center">
            <span className="bg-violet-950 py-2 px-4 rounded-full">
              Capital
            </span>
            <span className="text-sm">{country.capital}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
