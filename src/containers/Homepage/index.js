import React from 'react';
import { HomepageContainer } from './Homepage.styles';
import { Header, FunctionBar } from '../../components';

function Homepage() {
	return (
		<HomepageContainer>
			<Header />
			<FunctionBar />
		</HomepageContainer>
	);
}

export default Homepage;
