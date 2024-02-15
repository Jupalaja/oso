import CountriesOverview from './components/CountriesOverview';
import { Country } from './libs/types/apiResponseTypes';
import countriesData from '../../data/countries.json';

export default function Overview() {
  const data: Country[] = countriesData as Country[];

  return (
    <>
      <CountriesOverview data={data} />
    </>
  );
}
