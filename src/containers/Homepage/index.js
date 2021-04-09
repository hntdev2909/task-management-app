import React, { useEffect, useState } from 'react';
import {
	HomepageContainer,
	HomepageMaxWidth,
	HomepageLoading,
} from './Homepage.styles';
import {
	Header,
	FunctionBar,
	ListCardTask,
	Modal,
	Spinner,
} from '../../components';
import { loadLocalTask, loadLocalCol } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../api/callAPI';

function Homepage() {
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();

	const { isLoadingServer } = useSelector((state) => state.loading);

	useEffect(() => {
		setIsLoading(true);
		API.firstCall()
			.then((res) => {
				console.log(res.data);
				dispatch(
					loadLocalCol({
						columns: res.data.columns,
						columnOrder: res.data.columnOrder[0].columnOrder,
					})
				);
				dispatch(loadLocalTask(res.data.tasks));
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<HomepageContainer>
			{isLoading ? (
				<HomepageLoading>
					<Spinner></Spinner>
				</HomepageLoading>
			) : (
				<HomepageMaxWidth>
					<Modal />
					<Header />
					<FunctionBar />
					<ListCardTask />
				</HomepageMaxWidth>
			)}
		</HomepageContainer>
	);
}

export default Homepage;
