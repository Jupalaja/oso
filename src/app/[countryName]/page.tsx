import React from 'react';
import type { Country, Region } from '../libs/types/apiResponseTypes';
import BackButton from '../components/BackButton';
import countriesData from '../../../data/countries.json';

function getCountryData(countryName: string): Country {
  const country = countriesData.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );
  if (!country) throw new Error(`Country '${countryName}' not found.`);
  const region = country.region as Region;
  if (!region) throw new Error(`Region not found ${countryName}'.`);

  return {
    ...country,
    region,
  } as Country;

  type countryProps = {
    params: {
      countryName: string;
    };
  };
}

type countryProps = {
  params: {
    countryName: string;
  };
};

export default function Country({ params }: countryProps) {
  const country: Country = getCountryData(params.countryName);

  return (
    <>
      <BackButton />
      <div className="w-full flex flex-col md:flex-row md:justify-between my-6 sm:my-9 lg:my-12">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full md:w-[50%] h-full md:h-[50%] rounded-[0.3125rem] shadow-md shadow-box-shadow"
        />
        <div className="w-full md:w-[45%] my-6 sm:my-9 md:my-0 flex flex-col gap-5">
          <h2 className="text-[1.375rem] md:text-2xl lg:text-[2rem] font-extrabold">
            {country.name.common}
          </h2>
          <div className="flex flex-col 2xl:flex-row justify-between gap-4 sm:gap-6 md:gap-8 my-0 sm:my-2 md:my-4 text-sm md:text-base">
            <div className="flex flex-col gap-[0.15rem] md:gap-[0.35rem]">
              <p>
                <span className="font-bold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-bold">Population:</span>{' '}
                {country.population.toLocaleString('en-US')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
