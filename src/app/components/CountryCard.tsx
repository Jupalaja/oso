import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

type countryCardProps = PropsWithChildren<{
  name: string;
  flag: string;
  population: string;
  region: string;
}>;

export default function CountryCard(props: countryCardProps) {
  return (
    <Link href={`/${props.name}`} aria-label={`${props.name}`}>
      <div className="w-[16.5rem] h-[21rem] bg-light-elements dark:bg-dark-elements rounded-[0.3125rem]  shadow-md shadow-box-shadow hover:scale-105 transition-transform">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={props.flag}
          alt={`The flag of ${props.name}.`}
          className="h-1/2 w-full rounded-t-[0.3125rem] shadow-md shadow-box-shadow"
        />
        <div className="flex flex-col gap-1 m-6">
          <h2 className="text-lg font-extrabold pb-2 truncate">{props.name}</h2>
          <p className="text-sm">
            <span className="font-bold">Region:</span> {props.region}
          </p>
          <p className="text-sm">
            <span className="font-bold">Population:</span> {props.population}
          </p>
        </div>
      </div>
    </Link>
  );
}
