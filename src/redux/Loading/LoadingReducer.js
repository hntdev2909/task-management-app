import { CALLING_SERVER, CALLED_SERVER } from './LoadingTypes';

const initialState = {
	isLoadingServer: false,
};

const LoadingReducers = (state = initialState, action) => {
	switch (action.type) {
		case CALLING_SERVER:
			return {
				...state,
				isLoadingServer: true,
			};

		case CALLED_SERVER:
			return {
				...state,
				isLoadingServer: false,
			};

		default:
			return {
				...state,
			};
	}
};

export default LoadingReducers;
