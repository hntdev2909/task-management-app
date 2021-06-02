import { LOAD_SUCCESS, LOAD_FAILURE } from './AlertTypes';

const loadSuccess = () => {
	return {
		type: LOAD_SUCCESS,
	};
};

const loadFailure = () => {
	return {
		type: LOAD_FAILURE,
	};
};

export { loadSuccess, loadFailure };
