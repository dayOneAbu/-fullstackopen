import PhoneNumber from "./PhoneNumber";

function NumbersList({ persons, onClickHandler }) {
  return (
    <div>
      {" "}
      <h2>Numbers</h2>
      {persons.map((person) => (
        <PhoneNumber
          key={person.id}
          person={person}
          handleDelete={onClickHandler}
        />
      ))}
    </div>
  );
}
export default NumbersList;
