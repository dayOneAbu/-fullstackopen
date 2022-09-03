function Countries({ data, handleClick }) {
  return (
    <div>
      {data.map((country) => (
        <p key={country.name?.common}>
          {country.name.common}{" "}
          <button
            id={country.name?.common}
            value={country}
            onClick={() => handleClick(country)}
          >
            show
          </button>
        </p>
      ))}
    </div>
  );
}
export default Countries;
