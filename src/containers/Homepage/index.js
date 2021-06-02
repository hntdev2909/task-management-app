import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
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
	const [isLoading, setIsLoading] = useState(true);
	const tasks = useSelector((state) => state.task);
	const { title, icon, button, dangerMode, timer } = useSelector(
		(state) => state.alert
	);
	const { isOpenModal } = useSelector((state) => state.modal);

	useEffect(() => {
		if (!isOpenModal) {
			if ((tasks && title) || icon) {
				swal({
					title: title,
					icon: icon,
					button: button,
					dangerMode: dangerMode,
					timer: timer,
				});
			}
		}
	}, [tasks, title, isOpenModal]);

	useEffect(() => {
		dispatch(callTaskData());
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<HomepageContainer>
			{isLoading && isLoadingServer ? (
				<HomepageLoading>
					<Spinner></Spinner>
				</HomepageLoading>
			) : (
				<HomepageMaxWidth>
					{isLoadingServer && (
						<HomepageLoading>
							<Spinner></Spinner>
						</HomepageLoading>
					)}
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
