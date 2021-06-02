import {
	CHANGE_IN_COL,
	CHANGE_BETWEEN_COL,
	ADD_TASK_COL,
	DELETE_TASK_COL,
	LOAD_LOCAL_COL,
	LOAD_COL,
} from './ListTaskTypes';

const initialState = {};

const ListTaskReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_LOCAL_COL:
			let tmpCol = {};
			for (const column of action.payload.columns) {
				tmpCol[column.columnName] = column;
			}
			return {
				...state,
				columns: tmpCol,
				columnOrder: action.payload.columnOrder,
			};

		case LOAD_COL:
			let tmpDataColumns = {};
			for (const column of action.payload) {
				tmpDataColumns[column.columnName] = column;
			}
			console.log(tmpDataColumns);
			return {
				...state,
				columns: tmpDataColumns,
			};

		case ADD_TASK_COL:
			return {
				...state,
				columns: {
					...state.columns,
					columnOne: {
						...state.columns['columnOne'],
						tasksId: [...state.columns['columnOne'].tasksId, action.payload],
					},
				},
			};
		case CHANGE_IN_COL:
			return {
				...state,
				columns: {
					...state.columns,
					[action.payload.col]: {
						...state.columns[action.payload.col],
						tasksId: action.payload.newTaskIds,
					},
				},
			};

		case CHANGE_BETWEEN_COL:
			return {
				...state,
				columns: action.payload.columns,
			};

		case DELETE_TASK_COL:
			const tmpColumns = { ...state };
			let id = action.payload;
			for (const col in tmpColumns.columns) {
				var index = tmpColumns.columns[col].tasksId.findIndex(
					(task) => task.id == id
				);
				if (index !== -1) {
					tmpColumns.columns[col].tasksId.splice(index, 1);
				}
			}

			return {
				...tmpColumns,
			};

		default:
			return state;
	}
};

export default ListTaskReducer;
