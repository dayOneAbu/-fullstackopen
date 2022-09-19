import { useState } from "react";

function SearchBar({ handelSearch }) {
  const [searchKey, setSearchKey] = useState("");
  return (
    <div>
      <label htmlFor="countryKey">
        Find countries{" "}
        <input
          id="countryKey"
          name="countryKey"
          value={searchKey}
          onChange={(e) => {
            setSearchKey((prev) => e.target.value);
            handelSearch(e);
          }}
        />
      </label>
    </div>
  );
}
export default SearchBar;
