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
import { callingServer, calledServer } from './Loading/LoadingActions';

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
	callingServer,
	calledServer,
};
