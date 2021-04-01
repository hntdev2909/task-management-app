import {
	ADD_TASK,
	EDIT_TASK,
	DELETE_TASK,
	SET_TMP_TASK,
	LOAD_LOCAL_TASK,
} from './TaskTypes';

const addTask = (data) => {
	return {
		type: ADD_TASK,
		payload: data,
	};
};

const editTask = (data) => {
	return {
		type: EDIT_TASK,
		payload: data,
	};
};

const deleteTask = (id) => {
	return {
		type: DELETE_TASK,
		payload: id,
	};
};

const setTmpTask = (id) => {
	return {
		type: SET_TMP_TASK,
		payload: id,
	};
};

const loadLocalTask = (data) => {
	return {
		type: LOAD_LOCAL_TASK,
		payload: data,
	};
};

export { addTask, editTask, deleteTask, setTmpTask, loadLocalTask };
