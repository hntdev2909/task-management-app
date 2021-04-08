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
	let tmpTaskData = { ...state };
	switch (action.type) {
		case LOAD_LOCAL_TASK: // DONE
			let tmpTaskLoad = {};
			for (const task of action.payload) {
				tmpTaskLoad[task._id] = task;
			}
			return {
				...state,
				...tmpTaskLoad,
			};

		case ADD_TASK: // DONE
			tmpTaskData = {
				...tmpTaskData,
				[action.payload.taskId]: action.payload,
			};
			return { ...tmpTaskData };

		case EDIT_TASK:
			console.log(action.payload);
			tmpTaskData = {
				...tmpTaskData,
				[action.payload.taskId]: action.payload,
			};

			return {
				...tmpTaskData,
			};

		case DELETE_TASK:
			console.log(action.payload);
			delete tmpTaskData[action.payload];

			return {
				...tmpTaskData,
			};

		case SET_TMP_TASK:
			return {
				...state,
				tmpTask: state[action.payload],
			};
		default:
			return state;
	}
};

export default TaskReducer;
