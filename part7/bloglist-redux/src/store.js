import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './reducers/notificationReducer';
import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
	reducer: {
		notification: notificationReducer,
		post: postReducer,
		user: userReducer,
	},
});
