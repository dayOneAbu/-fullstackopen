import { createSlice } from '@reduxjs/toolkit';
import {
	getLoggedUser,
	getUserDetail,
	getUsers,
	LogUserIn,
} from '../services/usersService';
import {
	getStorageItem,
	removeStorageItem,
	setStorageItem,
} from '../utils/storageHelpers';
import { notify } from './notificationReducer';

const userReducer = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		users: [],
		userDetail: {},
	},
	reducers: {
		setLoggedUser(state, action) {
			return {
				...state,
				currentUser: action.payload,
			};
		},
		removeLoggedUser(state, action) {
			return {
				...state,
				currentUser: action.payload,
			};
		},
		setUsers(state, action) {
			return {
				...state,
				users: action.payload,
			};
		},
		userDetail(state, action) {
			return {
				...state,
				userDetail: action.payload,
			};
		},
	},
});

export const { setLoggedUser, removeLoggedUser, setUsers, userDetail } =
	userReducer.actions;
export const login = (userName, password) => {
	return async (dispatch) => {
		try {
			const token = await LogUserIn(userName, password);
			setStorageItem('loggedUserToken', token);
			const data = await getLoggedUser();
			setStorageItem('loggedUser', data);
			dispatch(setLoggedUser(data));
		} catch (err) {
			dispatch(
				notify(
					{
						text: err.response.data.error,
						type: 'error',
					},
					5
				)
			);
		}
	};
};
export const loadUser = () => {
	return async (dispatch) => {
		const data = await getStorageItem('loggedUser');
		dispatch(setLoggedUser(data));
	};
};
export const logOut = () => {
	return async (dispatch) => {
		removeStorageItem('loggedUserToken');
		removeStorageItem('loggedUser');
		dispatch(removeLoggedUser(null));
	};
};
export const fetchUsers = () => {
	return async (dispatch) => {
		const data = await getUsers();
		dispatch(setUsers(data));
	};
};
export const fetchUserDetail = (id) => {
	return async (dispatch) => {
		try {
			const data = await getUserDetail(id);
			dispatch(userDetail(data));
		} catch (err) {
			dispatch(
				notify(
					{
						text: err.response.data.error,
						type: 'error',
					},
					5
				)
			);
		}
	};
};
export default userReducer.reducer;
