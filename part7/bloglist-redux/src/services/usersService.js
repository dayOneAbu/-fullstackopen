import axios from 'axios';
import { getStorageItem } from '../utils/storageHelpers';
const baseUrl = 'http://localhost:3003/api';

const LogUserIn = async (data) => {
	const res = await axios.post(`${baseUrl}/login/`, data);
	return res.data;
};

const getLoggedUser = async () => {
	const token = getStorageItem('loggedUserToken');
	const config = {
		headers: { Authorization: `bearer ${token}` },
	};
	const res = await axios.get(`${baseUrl}/users/me`, config);
	return res.data;
};
const getUsers = async () => {
	const res = await axios.get(`${baseUrl}/users/`);
	return res.data;
};
const getUserDetail = async (id) => {
	const res = await axios.get(`${baseUrl}/users/${id}`);
	return res.data;
};

export { LogUserIn, getLoggedUser, getUsers, getUserDetail };
