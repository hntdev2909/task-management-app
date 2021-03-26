import { useEffect } from 'react';

import { Images } from './themes';
import _ from 'lodash';

export const initialState = {
	tasks: {
		'task-1': {
			id: 'task-1',
			title: 'Take out the garbage',
			tag: {
				name: 'Viverradiam',
				bgColor: '#f6fdf7',
				color: '#3db452',
			},
			content:
				'Some methods maybe better than others, depending on time constraints,	system maturity, type of product.',
			member: [
				{
					name: 'Thinh',
					image: Images.img1.default,
				},
			],
			createdAt: 'Apr 23',
		},
		'task-2': {
			id: 'task-2',
			title: 'Watch my favourite show',
			tag: {
				name: 'Eget integer',
				bgColor: '#f8f0fc',
				color: '#b146ca',
			},
			content:
				'Some methods maybe better than others, depending on time constraints,	system maturity, type of product.',
			member: [
				{
					name: 'Thinh',
					image: Images.img1.default,
				},
				{
					name: 'Thanh',
					image: Images.img2.default,
				},
			],
			createdAt: 'Apr 22',
		},
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To do',
			tasksId: ['task-1', 'task-2'],
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

const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_ROW_IN_COL':
			const tmpState = { ...state };
			return {
				...tmpState,
				columns: {
					...tmpState.columns,
					[action.payload.col]: {
						...tmpState.columns[action.payload.col],
						tasksId: action.payload.newTaskIds,
					},
				},
			};
		case 'CHANGE_ROW_WITH_ROW':
			const tempState = { ...state };
			return {
				...tempState,
				columns: action.payload.columns,
			};

		case 'EDIT_TASK':
			const tmpInitialState = { ...state };
			return {
				...tmpInitialState,
				tasks: {
					...tmpInitialState.tasks,
					[action.payload.taskId]: action.payload.newData,
				},
			};
		case 'ADD_NEW_TASK':
			const defaultCol = 'column-1';
			return {
				...state,
				columns: {
					...state.columns,
					[defaultCol]: {
						...state.columns['column-1'],
						tasksId: [
							...state.columns['column-1'].tasksId,
							action.payload.taskId,
						],
					},
				},
				tasks: {
					...state.tasks,
					[action.payload.taskId]: action.payload.newData,
				},
			};
		case 'DELETE_TASK':
			const tmpData = { ...state };
			_.map(tmpData.columnOrder, (columnId) => {
				const column = tmpData.columns[columnId].tasksId;

				if (_.includes(column, action.payload.id)) {
					const indexElement = _.indexOf(column, action.payload.id);
					column.splice(indexElement, 1);
				}
			});
			delete tmpData.tasks[action.payload.id];

			return {
				...tmpData,
			};
		default:
			return;
	}
};

export default reducer;
