import { createSlice } from '@reduxjs/toolkit';

const filterReducer = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		filterAnecdote(state, action) {
			console.log(action.payload);
			return action.payload;
		},
	},
});
export const { filterAnecdote } = filterReducer.actions;
export default filterReducer.reducer;
