import {
	addTask,
	editTask,
	deleteTask,
	setTmpTask,
	loadLocalTask,
	callTaskData,
	callAddTask,
	callEditList,
	callDeleteTask,
	callEditTask,
} from './Task/TaskActions';
import { openModal, editing } from './Modal/ModalActions';
import {
	changeBetweenCol,
	changeInCol,
	addTaskCol,
	deleteTaskInCol,
	loadLocalCol,
	loadCol,
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
	loadCol,
	deleteTaskInCol,
	loadLocalCol,
	callingServer,
	calledServer,
	callTaskData,
	callAddTask,
	callEditList,
	callDeleteTask,
	callEditTask,
};
