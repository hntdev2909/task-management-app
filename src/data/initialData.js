import { Images } from '../themes';

const initialData = {
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
		'task-3': {
			id: 'task-3',
			title: 'Charge my phone',
			tag: {
				name: 'Eget integer',
				bgColor: '#fff9db',
				color: '#f5a003',
			},
			content:
				'Some methods maybe better than others, depending on time constraints,	system maturity, type of product.',
			member: [
				{
					name: 'Thanh',
					image: Images.img2.default,
				},
			],
			createdAt: 'Sep 12',
		},
		'task-4': {
			id: 'task-4',
			title: 'Cook dinner',
			tag: {
				name: 'Maecenas lacus',
				bgColor: '#e7f5ff',
				color: '#1c7ed6',
			},
			content:
				'Some methods maybe better than others, depending on time constraints,	system maturity, type of product.',
			member: [
				{
					name: 'Thinh',
					image: Images.img1.default,
				},
			],
			createdAt: 'Jun 20',
		},
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To do',
			tasksId: ['task-1', 'task-2', 'task-3', 'task-4'],
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

export default initialData;
