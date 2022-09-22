import { createSlice } from '@reduxjs/toolkit';
import {
	addComment,
	addLike,
	addNewPost,
	deletePost,
	getAll,
	getPost,
} from '../services/blogService';
import { notify } from './notificationReducer';

const postReducer = createSlice({
	name: 'post',
	initialState: {
		posts: [],
		detail: {},
	},
	reducers: {
		add(state, action) {
			state.posts.push(action.payload);
		},
		like(state, action) {
			return {
				...state,
				detail: {
					...action.payload,
				},
			};
		},
		comment(state, action) {
			return {
				...state,
				detail: {
					...action.payload,
				},
			};
		},
		remove(state, action) {
			return state.posts.filter((post) => post.id !== action.payload);
		},

		populatePost(state, action) {
			return { ...state, posts: action.payload };
		},
		singlePost(state, action) {
			return {
				...state,
				detail: action.payload,
			};
		},
	},
});
export const { add, like, remove, populatePost, singlePost } =
	postReducer.actions;
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
export const commentPost = (id, data) => {
	return async (dispatch) => {
		try {
			const post = await addComment(id, data);
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
		await dispatch(remove(id));
	};
};
export const fetchSinglePost = (id) => {
	return async (dispatch) => {
		const data = await getPost(id);
		await dispatch(singlePost(data));
	};
};
export default postReducer.reducer;
