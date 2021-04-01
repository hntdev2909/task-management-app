import {
	CHANGE_IN_COL,
	CHANGE_BETWEEN_COL,
	ADD_TASK_COL,
	DELETE_TASK_COL,
	LOAD_LOCAL_COL,
} from './ListTaskTypes';

export const changeInCol = (data) => {
	return {
		type: CHANGE_IN_COL,
		payload: data,
	};
};

export const changeBetweenCol = (data) => {
	return {
		type: CHANGE_BETWEEN_COL,
		payload: data,
	};
};

export const addTaskCol = (id) => {
	return {
		type: ADD_TASK_COL,
		payload: id,
	};
};

export const deleteTaskInCol = (id) => {
	return {
		type: DELETE_TASK_COL,
		payload: id,
	};
};

export const loadLocalCol = (data) => {
	return {
		type: LOAD_LOCAL_COL,
		payload: data,
	};
};
