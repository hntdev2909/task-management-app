import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { HomepageContainer } from './Homepage.styles';
import { Header, FunctionBar, ListCardTask, Modal } from '../../components';
import { useStateValue } from '../../StateProvider';

function Homepage() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [btnModal, setBtnModal] = useState('');

	const [{ tasks }, dispatch] = useStateValue();
	const [taskEditing, setTaskEditing] = useState({});

	// const [data, setData] = useState(initialData);
	// const [editData, setEditData] = useState({});
	// const [nameButtonModal, setNameButtonModal] = useState('');
	// const [taskId, setTaskId] = useState('');
	// const handleDragEvent = (newData) => {
	// 	setData(newData);
	// };

	const handleIsOpenModal = (textBtn, id) => {
		setIsOpenModal(!isOpenModal);
		if (textBtn !== 'close') {
			setBtnModal(textBtn);
			setTaskEditing(tasks[id]);
		}
	};

	// const handleAddNewData = (newTask) => {
	// 	const tmpData = { ...data };
	// 	if (!_.has(newTask.id, tmpData.tasks)) {
	// 		console.log(tmpData.columns['column-1']);
	// 		tmpData.columns['column-1'].tasksId.push(newTask.id);
	// 		tmpData.tasks[newTask.id] = newTask;
	// 	} else {
	// 		tmpData.tasks[newTask.id] = newTask;
	// 	}
	// 	setData(tmpData);
	// };

	// const handleEditTask = (taskId) => {
	// 	setTaskId(taskId);
	// 	const tmpEditData = data.tasks[taskId];
	// 	setEditData(tmpEditData);
	// 	setIsOpenModal(!isOpenModal);
	// 	setNameButtonModal('Lưu');
	// };

	// useEffect(() => {
	// 	console.log(data);
	// }, [data]);

	return (
		<HomepageContainer>
			<Modal
				taskEditing={taskEditing ? taskEditing : ''}
				btnModal={btnModal}
				display={isOpenModal ? 'flex' : 'none'}
				callback={handleIsOpenModal}
				// callbackData={handleAddNewData}
				// editData={editData}
				// nameButton={nameButtonModal}
			/>
			<Header />
			<FunctionBar isOpenModal={isOpenModal} callback={handleIsOpenModal} />
			<ListCardTask callback={handleIsOpenModal} />
		</HomepageContainer>
	);
}

export default Homepage;
