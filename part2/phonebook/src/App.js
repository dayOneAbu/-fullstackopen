import { useEffect, useState } from "react";
import NotificationMessage from "./components/NotificationMessage";
import NumbersList from "./components/NumbersList";
import PhonebookForm from "./components/PhonebookForm";
import Search from "./components/Search";

import {
  getPhonebook,
  addPhonebook,
  deletePhonebook,
  updatePhonebook,
} from "./services/phonebook";
function App() {
  const [formState, setFormState] = useState({ name: "", phone: "" });
  const [keyword, setKeyword] = useState("");
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState({
    text: null,
    type: "",
  });
  useEffect(() => {
    getPhonebook()
      .then((res) => setPersons(res.data))
      .catch((err) => alert(`oops! something went wrong, ${err.message}`));
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
  const createMessageType = (text, type) => {
    setMessage({
      text,
      type,
    });
    setTimeout(() => {
      setMessage({
        text: null,
        type: "",
      });
    }, 5000);
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
    const newPhonebook = {
      name: e.target.personName.value,
      phone: e.target.phone.value,
    };
    const record = persons.find((person) => person.name === newPhonebook.name);
    if (record) {
      const confirm = window.confirm(
        `${record.name} is already Added to phonebook, replace the old number with the new one?`
      );
      if (!confirm) {
        createMessageType(
          `${record.name} was already Added to phonebook`,
          "error"
        );
      } else {
        return updatePhonebook(record.id, newPhonebook).then((res) => {
          setPersons(
            persons.map((person) =>
              person.id !== record.id ? person : res.data
            )
          );
          createMessageType(
            `${res.data.name} is Added to your phonebook`,
            "success"
          );
        });
      }
    } else {
      addPhonebook(newPhonebook, persons)
        .then((res) => {
          setPersons((prev) => {
            return persons.concat(res.data);
          });
          createMessageType(
            `${res.data.name} is Added to your phonebook`,
            "success"
          );
        })
        .catch((err) => {
          createMessageType(
            `${err.response.data.error} is Added to your phonebook`,
            "error"
          );
        });
    }
  };
  const handleDelete = (person) => {
    deletePhonebook(person)
      .then((res) => {
        createMessageType(`${person.name} is removed from server`, "error");
        setPersons(persons.filter((p) => p.id !== person.id));
      })
      .catch((err) => {
        createMessageType(
          `${person.name} was already deleted from server`,
          "error"
        );
        setPersons(persons.filter((p) => p.id !== person.id));
      });
  };

  return (
    <div>
      <h2>Phone book</h2>
      <Search keyword={keyword} onChange={(e) => handelSearch(e)} />
      <NotificationMessage message={message} />
      <PhonebookForm
        formState={formState}
        onSubmit={(e) => handleOnSubmit(e)}
        handelNewName={(e) => handelNewName(e)}
        handelPhone={(e) => handelPhone(e)}
      />
      <NumbersList onClickHandler={handleDelete} persons={persons} />
    </div>
  );
}

export default App;
