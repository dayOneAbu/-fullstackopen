import { useState } from "react";
import NumbersList from "./components/NumbersList";
import PhonebookForm from "./components/PhonebookForm";
import Search from "./components/Search";

function App() {
  const [formState, setFormState] = useState({ name: "", phone: "" });
  const [keyword, setKeyword] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const handelSearch = (e) => {
    setKeyword(() => e.target.value);
    const res = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPersons(() => {
      return [...res];
    });
  };

  const handelNewName = (e) => {
    setFormState((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };
  const handelPhone = (e) => {
    setFormState((prev) => {
      return {
        ...prev,
        phone: e.target.value,
      };
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { personName, phone } = e.target;
    setPersons((prev) => {
      if (persons.some((person) => person.name === personName.value)) {
        window.alert(`${personName.value} is already added to the phonebook`);
        return [...prev];
      }
      return [...prev, { name: personName.value, phone: phone.value }];
    });
  };
  return (
    <div>
      <h2>Phone book</h2>
      <Search keyword={keyword} onChange={(e) => handelSearch(e)} />
      <PhonebookForm
        formState={formState}
        onSubmit={(e) => handleOnSubmit(e)}
        handelNewName={(e) => handelNewName(e)}
        handelPhone={(e) => handelPhone(e)}
      />
      <NumbersList persons={persons} />
    </div>
  );
}

export default App;
