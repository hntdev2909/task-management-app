import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { HomepageContainer } from './Homepage.styles';
import { Header, FunctionBar, ListCardTask } from '../../components';

import initialData from '../../data/initialData';

function Homepage() {
	const [data, setData] = useState(initialData);

	const handleDragEvent = (newData) => {
		setData(newData);
	};

	return (
		<HomepageContainer>
			<Header />
			<FunctionBar />
			<ListCardTask data={data} callback={handleDragEvent} />
		</HomepageContainer>
	);
}

export default Homepage;
