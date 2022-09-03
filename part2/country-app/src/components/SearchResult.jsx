import Countries from "./Countries";
import Country from "./Country";

function SearchResult({ countries, onClick }) {
  if (countries.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      {countries.length > 1 ? (
        <Countries handleClick={onClick} data={countries} />
      ) : (
        <Country countryData={countries} />
      )}
    </div>
  );
}
export default SearchResult;
