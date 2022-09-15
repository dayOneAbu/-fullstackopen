const notificationReducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return action.payload;
		case 'REMOVE_NOTIFICATION':
			return null;
		default:
			return state;
	}
};

export const notify = (content) => {
	return {
		type: 'SET_NOTIFICATION',
		payload: content,
	};
};
export const un_notify = () => {
	return {
		type: 'REMOVE_NOTIFICATION',
	};
};

export default notificationReducer;
