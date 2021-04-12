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
import { callTaskData } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

function Homepage() {
	const dispatch = useDispatch();
	const { isLoadingServer } = useSelector((state) => state.loading);

	useEffect(() => {
		dispatch(callTaskData());
	}, []);

	return (
		<HomepageContainer>
			{isLoadingServer ? (
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
