const notificationReducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return action.payload;
		default:
			return state;
	}
};

export const notify = (content, time) => {
	return (dispatch) => {
		dispatch({
			type: 'SET_NOTIFICATION',
			payload: content,
		});
		const remove = setTimeout(() => {
			dispatch({
				type: 'SET_NOTIFICATION',
				payload: null,
			});
		}, time * 1000);
		clearTimeout(remove);
	};
};

export default notificationReducer;
