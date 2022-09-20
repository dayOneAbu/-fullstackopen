/* eslint-disable indent */
const notificationReducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return action.payload;
		default:
			return state;
	}
};

export const notify = (data, time) => {
	return (dispatch) => {
		dispatch({
			type: 'SET_NOTIFICATION',
			payload: data,
		});
		setTimeout(() => {
			dispatch({
				type: 'SET_NOTIFICATION',
				payload: null,
			});
		}, time * 1000);
	};
};

export default notificationReducer;
