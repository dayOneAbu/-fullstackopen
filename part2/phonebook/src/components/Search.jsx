function Search({ keyword, onChange }) {
  return (
    <div>
      Filter shown with:{" "}
      <input value={keyword} name="personName" onChange={onChange} />
    </div>
  );
}
export default Search;
