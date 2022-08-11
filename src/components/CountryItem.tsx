import React from "react";
import { Badge } from "./Badge";
import { Color, Icountry } from "./types";

interface Iprops {
  country: Icountry;
}

export const CountryItem = ({ country }: Iprops) => {
  return (
    <li className="row align-items-center border p-1">
      <img src={country.flag} alt="country" className="col-1" />
      <p className="col-2 ">{country.name}</p>
      <p className="col-2">{country.capital}</p>
      <p className="col-2">{country.region}</p>
      <Badge
        value={country.population}
        type="population"
        color={Color.Primary}
      />
      <br />
      <Badge value={country.area} type="area" color={Color.Secondary} />
    </li>
  );
};
