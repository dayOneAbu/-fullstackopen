import { createSlice } from '@reduxjs/toolkit';

const filterReducer = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		filter(state, action) {
			return action.payload;
		},
	},
});
export const { filter } = filterReducer.actions;

export const filterAnecdote = (anecdote) => {
	return (dispatch) => {
		dispatch(filter(anecdote));
	};
};

export default filterReducer.reducer;
