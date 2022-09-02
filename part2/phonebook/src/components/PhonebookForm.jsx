function PhonebookForm({ onSubmit, formState, handelNewName, handelPhone }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Add a new phone book</h2>
      <div>
        name:{" "}
        <input
          value={formState.name}
          name="personName"
          onChange={handelNewName}
        />
      </div>
      <div>
        number:{" "}
        <input value={formState.phone} name="phone" onChange={handelPhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
export default PhonebookForm;
