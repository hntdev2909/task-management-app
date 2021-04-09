import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		opacity: 0.5;
	}

	to {
		opacity: 1;
	}
`;

const HomepageLoading = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.5);
`;

const HomepageMaxWidth = styled.div`
	margin: 0 auto;
	min-width: 1130px;
	animation: ${fadeIn} 0.8s linear;
`;

const HomepageContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export { HomepageContainer, HomepageMaxWidth, HomepageLoading };
