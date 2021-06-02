import TaskReducer from './Task/TaskReducer';
import ModalReducer from './Modal/ModalReducer';
import ListTaskReducer from './ListTask/ListTaskReducer';
import LoadingReducer from './Loading/LoadingReducer';
import AlertReducer from './Alert/AlertReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	task: TaskReducer,
	modal: ModalReducer,
	listTask: ListTaskReducer,
	loading: LoadingReducer,
	alert: AlertReducer,
});

export default rootReducer;
