import { IS_OPEN_MODAL, IS_EDITING } from './ModalTypes';

export const openModal = (type) => {
	return {
		type: IS_OPEN_MODAL,
		payload: type,
	};
};

export const editing = (type) => {
	return {
		type: IS_EDITING,
		payload: type,
	};
};
