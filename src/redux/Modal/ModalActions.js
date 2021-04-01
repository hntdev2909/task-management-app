import { IS_OPEN_MODAL, IS_EDITING } from './ModalTypes';

export const openModal = () => {
	return {
		type: IS_OPEN_MODAL,
	};
};

export const editing = () => {
	return {
		type: IS_EDITING,
	};
};
