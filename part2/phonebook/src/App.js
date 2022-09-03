import { useEffect, useState } from "react";
import NumbersList from "./components/NumbersList";
import PhonebookForm from "./components/PhonebookForm";
import Search from "./components/Search";
import axios from "axios";
function App() {
  const [formState, setFormState] = useState({ name: "", phone: "" });
  const [keyword, setKeyword] = useState("");
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data))
      .catch((err) => console.log(err));
  }, []);

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
