import { LOAD_SUCCESS, LOAD_FAILURE } from './AlertTypes';

const initialState = {
	title: '',
	icon: '',
	button: '',
	dangerMode: false,
	timer: 2000,
};

const AlertReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_SUCCESS:
			return {
				...state,
				title: 'Success',
				icon: 'success',
				button: 'Confirm',
				dangerMode: false,
			};
		case LOAD_FAILURE:
			return {
				...state,
				title: 'Failure',
				icon: 'error',
				button: 'OK',
				dangerMode: true,
			};
		default:
			return state;
	}
};

export default AlertReducer;
