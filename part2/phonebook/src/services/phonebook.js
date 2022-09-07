import axios from "axios";
const baseUrl =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3001/api";
const getPhonebook = () => {
  return axios.get(`${baseUrl}/persons`);
};
const addPhonebook = (data) => {
  return axios.post(`${baseUrl}/persons`, data);
};
const updatePhonebook = (id, data) => {
  return axios.put(`${baseUrl}/persons/${id}`, data);
};
const deletePhonebook = (person) => {
  if (window.confirm(`Delete ${person.name} ?`)) {
    return axios.delete(`${baseUrl}/persons/${person.id}`);
  }
};

export { getPhonebook, addPhonebook, updatePhonebook, deletePhonebook };
