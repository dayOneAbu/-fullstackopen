import axios from 'axios';
import { getStorageItem } from '../utils/storageHelpers';
const baseUrl = 'http://localhost:3003/api';

const getAll = async () => {
	const res = await axios.get(`${baseUrl}/blogs`);
	return res.data;
};

const addNewPost = async (data) => {
	const token = getStorageItem('loggedUserToken');
	const config = {
		headers: { Authorization: `bearer ${token}` },
	};
	const res = await axios.post(`${baseUrl}/blogs/`, data, config);
	return res.data;
};
const addLike = async (id, data) => {
	const token = getStorageItem('loggedUserToken');
	const config = {
		headers: { Authorization: `bearer ${token}` },
	};
	const res = await axios.put(`${baseUrl}/blogs/${id}`, data, config);
	return res.data;
};
const addComment = async (id, data) => {
	const res = await axios.post(`${baseUrl}/blogs/${id}/comments`, data);
	return res.data;
};
const deletePost = async (id) => {
	const token = getStorageItem('loggedUserToken');
	const config = {
		headers: { Authorization: `bearer ${token}` },
	};
	const res = await axios.delete(`${baseUrl}/blogs/${id}`, config);
	return res.data;
};
const getPost = async (id) => {
	const res = await axios.get(`${baseUrl}/blogs/${id}`);
	return res.data;
};

export { addLike, getAll, addComment, deletePost, addNewPost, getPost };
