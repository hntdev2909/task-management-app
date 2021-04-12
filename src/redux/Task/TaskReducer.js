import {
	ADD_TASK,
	EDIT_TASK,
	DELETE_TASK,
	SET_TMP_TASK,
	LOAD_LOCAL_TASK,
} from './TaskTypes';

const initialState = {
	tmpTask: {},
};

const TaskReducer = (state = initialState, action) => {
	let tmpTaskData = { ...state };
	switch (action.type) {
		case LOAD_LOCAL_TASK:
			let tmpTaskLoad = {};
			for (const task of action.payload) {
				tmpTaskLoad[task._id] = task;
			}
			return {
				...state,
				...tmpTaskLoad,
			};

		case ADD_TASK:
			tmpTaskData = {
				...tmpTaskData,
				[action.payload.taskId]: action.payload,
			};
			return { ...tmpTaskData };

		case EDIT_TASK:
			tmpTaskData = {
				...tmpTaskData,
				[action.payload.taskId]: action.payload,
			};

			return {
				...tmpTaskData,
			};

		case DELETE_TASK:
			delete tmpTaskData[action.payload];

			return {
				...tmpTaskData,
			};

		case SET_TMP_TASK:
			let tmpListTaskData = { ...state };
			tmpListTaskData['tmpColumn'] = action.payload.columnId;
			return {
				...tmpListTaskData,
				tmpTask: action.payload.task,
				tmpColumn: tmpListTaskData.tmpColumn,
			};
		default:
			return state;
	}
};

export default TaskReducer;
