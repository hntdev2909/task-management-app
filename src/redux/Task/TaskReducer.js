import {
	ADD_TASK,
	EDIT_TASK,
	DELETE_TASK,
	SET_TMP_TASK,
	LOAD_LOCAL_TASK,
} from './TaskTypes';
import _ from 'lodash';

const initialState = {
	tmpTask: {},
};

const TaskReducer = (state = initialState, action) => {
	// const localData = localStorage.getItem('todoser');
	let tmpTaskData = { ...state };
	switch (action.type) {
		case LOAD_LOCAL_TASK:
			return {
				...state,
				...action.payload,
			};

		case ADD_TASK:
			tmpTaskData = {
				...tmpTaskData,
				[action.payload.taskId]: action.payload,
			};
			// localStorage.setItem(
			// 	'todoser',
			// 	JSON.stringify({
			// 		tasks: tmpTaskData,
			// 	})
			// );
			return { ...tmpTaskData };

		case EDIT_TASK:
			tmpTaskData = {
				...tmpTaskData,
				[action.payload.taskId]: action.payload,
			};
			// localStorage.setItem(
			// 	'todoser',
			// 	JSON.stringify({
			// 		tasks: tmpTaskData,
			// 	})
			// );
			return {
				...tmpTaskData,
			};

		case DELETE_TASK:
			delete tmpTaskData[action.payload];
			// localStorage.setItem(
			// 	'todoser',
			// 	JSON.stringify({
			// 		tasks: tmpTaskData,
			// 	})
			// );
			return {
				...tmpTaskData,
			};

		case SET_TMP_TASK:
			return {
				...state,
				tmpTask: state[action.payload].newData,
			};
		default:
			return state;
	}
};

export default TaskReducer;
