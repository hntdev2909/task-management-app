import React, { useState } from 'react';
import _ from 'lodash';
import { HomepageContainer } from './Homepage.styles';
import { Header, FunctionBar, ListCardTask, Modal } from '../../components';

import initialData from '../../data/initialData';

function Homepage() {
	const [data, setData] = useState(initialData);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleDragEvent = (newData) => {
		setData(newData);
	};

	const handleIsOpenModal = () => {
		setIsOpenModal(!isOpenModal);
	};

	const handleAddNewData = (newTask) => {
		console.log(newTask);
		const tmpData = { ...data };
		tmpData.columns['column-1'].tasksId.push(newTask.id);
		tmpData.tasks[newTask.id] = newTask;

		setData(tmpData);
	};

	return (
		<HomepageContainer>
			<Modal
				data={data}
				display={isOpenModal ? 'flex' : 'none'}
				callback={handleIsOpenModal}
				callbackData={handleAddNewData}
			/>
			<Header />
			<FunctionBar isOpenModal={isOpenModal} callback={handleIsOpenModal} />
			<ListCardTask data={data} callback={handleDragEvent} />
		</HomepageContainer>
	);
}

export default Homepage;
