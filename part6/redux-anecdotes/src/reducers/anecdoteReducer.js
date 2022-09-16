import { createSlice } from '@reduxjs/toolkit';
import {
	createNewAnecdotes,
	getAnecdotes,
	updateAnecdotes,
} from '../services/anecdotes';

const anecdotesReducer = createSlice({
	name: 'anecdotes',
	initialState: [],
	reducers: {
		add(state, action) {
			state.push(action.payload);
		},
		vote(state, action) {
			return state.map((anecdote) =>
				anecdote.id !== action.payload.id ? anecdote : action.payload
			);
		},

		appendAnecdotes(state, action) {
			state.push(action.payload);
		},
		setAnecdotes(state, action) {
			return action.payload;
		},
	},
});
export const { add, vote, appendAnecdotes, setAnecdotes } =
	anecdotesReducer.actions;
export const initializeAnecdotes = () => {
	return async (dispatch) => {
		const data = await getAnecdotes();
		dispatch(setAnecdotes(data));
	};
};
export const createAnecdote = (anecdote) => {
	return async (dispatch) => {
		const data = await createNewAnecdotes(anecdote);
		dispatch(add(data));
	};
};
export const voteAnecdote = (anecdote) => {
	return async (dispatch) => {
		const data = await updateAnecdotes(anecdote);
		dispatch(vote(data));
	};
};
export default anecdotesReducer.reducer;
