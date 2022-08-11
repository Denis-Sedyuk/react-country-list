import { CountryList } from "./components/CountryList";
import { transformCountries } from "../src/mappers";
import countries from "./country-data.json";

export const App = () => {
  return (
    <div className="container p-3">
      <h1 className="my-3">Country List</h1>
      <CountryList countries={transformCountries(countries)} />
    </div>
  );
};
