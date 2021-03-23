import React from 'react';
import { HomepageContainer } from './Homepage.styles';
import { Header, FunctionBar, ListCardTask } from '../../components';

function Homepage() {
	return (
		<HomepageContainer>
			<Header />
			<FunctionBar />
			<ListCardTask />
		</HomepageContainer>
	);
}

export default Homepage;
