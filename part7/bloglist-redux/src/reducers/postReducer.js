import { createSlice } from '@reduxjs/toolkit';
import {
	addLike,
	addNewPost,
	deletePost,
	getAll,
} from '../services/blogService';
import { notify } from './notificationReducer';

const postReducer = createSlice({
	name: 'post',
	initialState: [],
	reducers: {
		add(state, action) {
			state.push(action.payload);
		},
		like(state, action) {
			return state.map((post) =>
				post.id !== action.payload.id ? post : action.payload
			);
		},
		remove(state, action) {
			return state.filter((post) => post.id !== action.payload);
		},

		populatePost(state, action) {
			return action.payload;
		},
	},
});
export const { add, like, remove, populatePost } = postReducer.actions;
export const fetchBlogPosts = () => {
	return async (dispatch) => {
		const data = await getAll();
		dispatch(populatePost(data));
	};
};
export const createPost = (title, author, url) => {
	return async (dispatch) => {
		try {
			const newPost = await addNewPost({
				title,
				author,
				url,
			});
			dispatch(add(newPost));
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
export const likePost = (id, data) => {
	return async (dispatch) => {
		try {
			const post = await addLike(id, data);
			dispatch(like(post));
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
export const removePost = (id) => {
	return async (dispatch) => {
		await deletePost(id);
		dispatch(remove(id));
	};
};
export default postReducer.reducer;
