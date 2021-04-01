import { IS_OPEN_MODAL, IS_EDITING } from './ModalTypes';

const initialState = {
	isOpenModal: false,
	isEditing: false,
};

const ModalReducer = (state = initialState, action) => {
	switch (action.type) {
		case IS_OPEN_MODAL:
			return {
				...state,
				isOpenModal: !state.isOpenModal,
			};
		case IS_EDITING:
			return {
				...state,
				isEditing: !state.isEditing,
			};
		default:
			return {
				...state,
			};
	}
};

export default ModalReducer;
