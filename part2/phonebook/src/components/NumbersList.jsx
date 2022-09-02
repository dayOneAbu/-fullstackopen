import PhoneNumber from "./PhoneNumber";

function NumbersList({ persons }) {
  return (
    <div>
      {" "}
      <h2>Numbers</h2>
      {persons.map((person) => (
        <PhoneNumber key={person.name} person={person} />
      ))}
    </div>
  );
}
export default NumbersList;
