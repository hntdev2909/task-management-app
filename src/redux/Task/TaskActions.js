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
	loadSuccess,
	loadFailure,
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
				dispatch(loadSuccess());
			})
			.catch((err) => {
				dispatch(calledServer());
				dispatch(loadFailure());
			});
	};
};

const callAddTask = (data) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.createTask(data)
			.then((res) => {
				dispatch(addTask(res.data));
				dispatch(addTaskCol({ id: res.data._id }));
				dispatch(openModal(false));
				dispatch(calledServer());
				dispatch(loadSuccess());
			})
			.catch(() => {
				dispatch(calledServer());
				dispatch(loadFailure());
			});
	};
};

const callEditTask = (data) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.editTask(data)
			.then((res) => {
				dispatch(editTask(res.data));
				dispatch(editing(false));
				dispatch(openModal(false));
				dispatch(calledServer());
				dispatch(loadSuccess());
			})
			.catch(() => {
				dispatch(calledServer());
				dispatch(loadFailure());
			});
	};
};

const callEditList = (result) => {
	return (dispatch) => {
		dispatch(callingServer());
		API.changeCol(result)
			.then((res) => {
				dispatch(loadCol(res.data));
				setTimeout(() => {
					dispatch(calledServer());
					dispatch(loadSuccess());
				}, 2500);
			})
			.catch(() => {
				dispatch(calledServer());
				dispatch(loadFailure());
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
				dispatch(loadSuccess());
			})
			.catch((err) => {
				dispatch(calledServer());
				dispatch(loadFailure());
			});
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
