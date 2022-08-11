import { Icountry, IcountryApi } from "../components/types";

export const transformCountries = (countries: IcountryApi[]): Icountry[] => {
  return countries.map((country: any) => {
    return {
      flag: country.flags.svg,
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      area: country.area,
      region: country.region,
    };
  });
};
