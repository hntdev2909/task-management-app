import React, { useEffect } from 'react';
import { HomepageContainer, HomepageMaxWidth } from './Homepage.styles';
import { Header, FunctionBar, ListCardTask, Modal } from '../../components';
import { loadLocalTask, loadLocalCol } from '../../redux';
import { useDispatch } from 'react-redux';

function Homepage() {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	const localData = localStorage.getItem('todoser');
	// 	if (localData) {
	// 		dispatch(loadLocalTask(JSON.parse(localData.task)));
	// 		dispatch(loadLocalCol(JSON.parse(localData.columns)));
	// 	}
	// }, []);

	return (
		<HomepageContainer>
			<HomepageMaxWidth>
				<Modal />
				<Header />
				<FunctionBar />
				<ListCardTask />
			</HomepageMaxWidth>
		</HomepageContainer>
	);
}

export default Homepage;
