import { CALLING_SERVER, CALLED_SERVER } from './LoadingTypes';

export const callingServer = () => {
	return {
		type: CALLING_SERVER,
	};
};

export const calledServer = () => {
	return {
		type: CALLED_SERVER,
	};
};
