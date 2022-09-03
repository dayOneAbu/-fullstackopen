function PhoneNumber({ person, handleDelete }) {
  return (
    <p>
      {person.name} {person.phone}{" "}
      <button onClick={() => handleDelete(person)}>delete</button>
    </p>
  );
}
export default PhoneNumber;
