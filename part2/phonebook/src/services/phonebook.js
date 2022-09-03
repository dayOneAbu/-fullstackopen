import axios from "axios";
const getPhonebook = () => {
  return axios.get("http://localhost:3001/persons");
};
const addPhonebook = (data) => {
  return axios.post("http://localhost:3001/persons", data);
};
const updatePhonebook = (id, data) => {
  return axios.put(`http://localhost:3001/persons/${id}`, data);
};
const deletePhonebook = (person) => {
  if (window.confirm(`Delete ${person.name} ?`)) {
    return axios.delete(`http://localhost:3001/persons/${person.id}`);
  }
};

export { getPhonebook, addPhonebook, updatePhonebook, deletePhonebook };
