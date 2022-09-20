import { createSlice } from '@reduxjs/toolkit';
import { getLoggedUser, LogUserIn } from '../services/blogService';
import {
	getStorageItem,
	removeStorageItem,
	setStorageItem,
} from '../utils/storageHelpers';
import { notify } from './notificationReducer';

const userReducer = createSlice({
	name: 'user',
	initialState: null,
	reducers: {
		setUser(state, action) {
			return action.payload;
		},
		removeUser(state, action) {
			return action.payload;
		},
	},
});

export const { setUser, removeUser } = userReducer.actions;
export const login = (userName, password) => {
	return async (dispatch) => {
		try {
			const token = await LogUserIn(userName, password);
			setStorageItem('loggedUserToken', token);
			const data = await getLoggedUser();
			setStorageItem('loggedUser', data);
			dispatch(setUser(data));
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
export const fetchUser = () => {
	return async (dispatch) => {
		const data = await getStorageItem('loggedUser');
		dispatch(setUser(data));
	};
};
export const logUserOut = () => {
	return async (dispatch) => {
		removeStorageItem('loggedUserToken');
		removeStorageItem('loggedUser');
		dispatch(removeUser(null));
	};
};
export default userReducer.reducer;
