import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
	0% {
		top: 8px;
		height: 64px;
	}
	50%, 100% {
		top: 24px;
		height: 32px;
	}
`;

const SpinnerChild = styled.div`
	display: inline-block;
	position: absolute;
	left: 8px;
	width: 16px;
	background: #fff;
	animation: ${Animation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

	&:nth-child(1) {
		left: 8px;
		animation-delay: -0.24s;
	}

	&:nth-child(2) {
		left: 32px;
		animation-delay: -0.12s;
	}

	&:nth-child(3) {
		left: 56px;
		animation-delay: 0;
	}
`;

const SpinnerParent = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
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
`;

const HomepageContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export {
	HomepageContainer,
	HomepageMaxWidth,
	HomepageLoading,
	SpinnerParent,
	SpinnerChild,
};
