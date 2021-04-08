import React, { useEffect, useState } from 'react';
import {
	HomepageContainer,
	HomepageMaxWidth,
	HomepageLoading,
	SpinnerParent,
	SpinnerChild,
} from './Homepage.styles';
import { Header, FunctionBar, ListCardTask, Modal } from '../../components';
import { loadLocalTask, loadLocalCol } from '../../redux';
import { useDispatch } from 'react-redux';
import { API } from '../../api/callAPI';

function Homepage() {
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();

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
				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<HomepageContainer>
			{isLoading ? (
				<HomepageLoading>
					<SpinnerParent>
						<SpinnerChild></SpinnerChild>
						<SpinnerChild></SpinnerChild>
						<SpinnerChild></SpinnerChild>
					</SpinnerParent>
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
