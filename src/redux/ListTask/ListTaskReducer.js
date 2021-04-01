import {
	CHANGE_IN_COL,
	CHANGE_BETWEEN_COL,
	ADD_TASK_COL,
	DELETE_TASK_COL,
	LOAD_LOCAL_COL,
} from './ListTaskTypes';

const initialState = {
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To do',
			tasksId: [],
		},
		'column-2': {
			id: 'column-2',
			title: 'In progress',
			tasksId: [],
		},
		'column-3': {
			id: 'column-3',
			title: 'In review',
			tasksId: [],
		},
		'column-4': {
			id: 'column-4',
			title: 'Done',
			tasksId: [],
		},
	},
	columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

const ListTaskReducer = (state = initialState, action) => {
	// const localData = localStorage.getItem('todoser');
	switch (action.type) {
		case LOAD_LOCAL_COL:
			return {
				...state,
				...action.payload,
			};

		case ADD_TASK_COL:
			// localStorage.setItem(
			// 	'todoser',
			// 	JSON.stringify({
			// 		tasks: localData.tasks,
			// 		columns: {
			// 			...state.columns,
			// 			'column-1': {
			// 				...state.columns['column-1'],
			// 				tasksId: [...state.columns['column-1'].tasksId, action.payload],
			// 			},
			// 		},
			// 	})
			// );
			return {
				...state,
				columns: {
					...state.columns,
					'column-1': {
						...state.columns['column-1'],
						tasksId: [...state.columns['column-1'].tasksId, action.payload],
					},
				},
			};
		case CHANGE_IN_COL:
			// localStorage.setItem(
			// 	'todoser',
			// 	JSON.stringify({
			// 		tasks: localData.tasks,
			// 		columns: {
			// 			...state.columns,
			// 			[action.payload.col]: {
			// 				...state.columns[action.payload.col],
			// 				tasksId: action.payload.newTaskIds,
			// 			},
			// 		},
			// 	})
			// );
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
			// localStorage.setItem(
			// 	'todoser',
			// 	JSON.stringify({
			// 		tasks: localData.tasks,
			// 		columns: action.payload.columns,
			// 	})
			// );
			return {
				...state,
				columns: action.payload.columns,
			};

		case DELETE_TASK_COL:
			const tmpColumns = { ...state };
			for (const col in tmpColumns.columns) {
				var index = tmpColumns.columns[col].tasksId.indexOf(action.payload);
				if (index !== -1) {
					tmpColumns.columns[col].tasksId.splice(index, 1);
				}
			}
			// localStorage.setItem(
			// 	'todoser',
			// 	JSON.stringify({
			// 		tasks: localData.tasks,
			// 		columns: tmpColumns.columns,
			// 		columnOrder: tmpColumns.columnOrder,
			// 	})
			// );
			return {
				...tmpColumns,
			};

		default:
			return state;
	}
};

export default ListTaskReducer;
