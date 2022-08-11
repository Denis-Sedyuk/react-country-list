export interface Icountry {
  area: number;
  capital: string;
  flag: string;
  name: string;
  population: number;
  region: string;
}

export interface IcountryApi {
  name: IcountryName;
  area: number;
  capital: string[];
  flags: IcountryFlags;
  population: number;
  region: string;
}

interface IcountryFlags {
  png: string;
  svg: string;
}

interface IcountryName {
  common: string;
  official: string;
  nativeName: IcountryNativeName;
}

interface IcountryNativeName {
  [key: string]: ICountryNativeNameLang | undefined;
}

interface ICountryNativeNameLang {
  official: string;
  common: string;
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
  Light = "light",
  Dark = "dark",
}

export type BadgeLabelType = "area" | "population";
