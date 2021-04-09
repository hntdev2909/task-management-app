import TaskReducer from './Task/TaskReducer';
import ModalReducer from './Modal/ModalReducer';
import ListTaskReducer from './ListTask/ListTaskReducer';
import LoadingReducer from './Loading/LoadingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	task: TaskReducer,
	modal: ModalReducer,
	listTask: ListTaskReducer,
	loading: LoadingReducer,
});

export default rootReducer;
