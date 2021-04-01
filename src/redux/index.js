import {
	addTask,
	editTask,
	deleteTask,
	setTmpTask,
	loadLocalTask,
} from './Task/TaskActions';
import { openModal, editing } from './Modal/ModalActions';
import {
	changeBetweenCol,
	changeInCol,
	addTaskCol,
	deleteTaskInCol,
	loadLocalCol,
} from './ListTask/ListTaskActions';

export {
	addTask,
	loadLocalTask,
	editTask,
	deleteTask,
	openModal,
	editing,
	changeBetweenCol,
	changeInCol,
	addTaskCol,
	setTmpTask,
	deleteTaskInCol,
	loadLocalCol,
};
