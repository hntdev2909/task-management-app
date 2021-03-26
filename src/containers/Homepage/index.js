import React, { useState } from 'react';
import { HomepageContainer, HomepageMaxWidth } from './Homepage.styles';
import { Header, FunctionBar, ListCardTask, Modal } from '../../components';
import { useStateValue } from '../../StateProvider';

function Homepage() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [btnModal, setBtnModal] = useState('');

	const [{ tasks }, dispatch] = useStateValue();
	const [taskEditing, setTaskEditing] = useState({});

	const handleIsOpenModal = (textBtn, id) => {
		setIsOpenModal(!isOpenModal);
		if (textBtn !== 'close') {
			setBtnModal(textBtn);
			setTaskEditing(tasks[id]);
		}
	};

	return (
		<HomepageContainer>
			<HomepageMaxWidth>
				<Modal
					taskEditing={taskEditing ? taskEditing : ''}
					btnModal={btnModal}
					display={isOpenModal ? 'flex' : 'none'}
					callback={handleIsOpenModal}
				/>
				<Header />
				<FunctionBar isOpenModal={isOpenModal} callback={handleIsOpenModal} />
				<ListCardTask callback={handleIsOpenModal} />
			</HomepageMaxWidth>
		</HomepageContainer>
	);
}

export default Homepage;
