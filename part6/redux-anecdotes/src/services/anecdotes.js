import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getAnecdotes = async () => {
	const res = await axios.get(`${baseUrl}/anecdotes`);
	return res.data;
};

const createNewAnecdotes = async (data) => {
	const res = await axios.post(`${baseUrl}/anecdotes`, data);
	return res.data;
};
const updateAnecdotes = async (item) => {
	const res = await axios.put(`${baseUrl}/anecdotes/${item.id}`, {
		...item,
		votes: item.votes + 1,
	});
	return res.data;
};

export { getAnecdotes, createNewAnecdotes, updateAnecdotes };
