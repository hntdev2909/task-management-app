import {
	ADD_TASK,
	EDIT_TASK,
	DELETE_TASK,
	SET_TMP_TASK,
	LOAD_LOCAL_TASK,
} from './TaskTypes';
import { API } from '../../api/callAPI';
import {
	calledServer,
	callingServer,
	addTaskCol,
	openModal,
	deleteTaskInCol,
	loadLocalCol,
	loadCol,
	editing,
} from '../index';

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

const setTmpTask = (task, columnId) => {
	return {
		type: SET_TMP_TASK,
		payload: {
			task,
			columnId,
		},
	};
};

const loadLocalTask = (data) => {
	return {
		type: LOAD_LOCAL_TASK,
		payload: data,
	};
};

// middleware

// DONE
const callTaskData = () => {
	return (dispatch) => {
		dispatch(callingServer());
		API.loadData()
			.then((res) => {
				dispatch(
					loadLocalCol({
						columns: res.data.columns,
						columnOrder: res.data.columnOrder[0].columnOrder,
					})
				);
				dispatch(loadLocalTask(res.data.tasks));
				dispatch(calledServer());
			})
			.catch((err) => {
				dispatch(calledServer());
			});
	};
};

// DONE
const callAddTask = (data) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.createTask(data).then((res) => {
			dispatch(addTask(res.data));
			dispatch(addTaskCol({ id: res.data._id }));
			dispatch(openModal(false));
			dispatch(calledServer());
		});
	};
};

// DONE
const callEditTask = (data) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.editTask(data)
			.then((res) => {
				dispatch(editTask(res.data));
				dispatch(openModal(false));
				dispatch(calledServer());
			})
			.catch(() => console.log('Err'));
	};
};

// DONE
const callEditList = (result) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.changeCol(result)
			.then((res) => {
				dispatch(loadCol(res.data));
				setTimeout(() => {
					dispatch(calledServer());
				}, 1000);
			})
			.catch(() => {
				dispatch(calledServer());
			});
	};
};

const callDeleteTask = (taskId, columnId) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.deleteTask({ taskId, columnId })
			.then((res) => {
				dispatch(deleteTaskInCol(taskId));
				dispatch(deleteTask(taskId));
				dispatch(openModal(false));
				dispatch(editing(false));
				dispatch(calledServer());
			})
			.catch((err) => console.log(err));
	};
};

export {
	callTaskData,
	callAddTask,
	callEditList,
	callDeleteTask,
	addTask,
	editTask,
	deleteTask,
	setTmpTask,
	loadLocalTask,
	callEditTask,
};
