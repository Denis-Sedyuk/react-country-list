import React from "react";
import { CountryItem } from "./CountryItem";
import { Icountry } from "../types";

interface Iprops {
  countries: Icountry[];
}

export const CountryList = ({ countries }: Iprops) => {
  return (
    <ul className="row fw-semibold">
      {countries.map((country) => {
        return <CountryItem country={country} />;
      })}
    </ul>
  );
};
