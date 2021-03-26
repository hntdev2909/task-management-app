import styled from 'styled-components';

const FunctionBarIcon = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin};
`;

const FunctionBarButton = styled.a`
	height: 46px;
	display: inline-block;
	align-items: center;
	padding: 12px 16px;
	font-size: 1rem;
	border: 1px solid #e5e8eb;
	margin: ${(props) => props.margin};
	border-radius: 10px;
	background-color: ${(props) => props.bgColor || '#f8f9fa'};
	color: ${(props) => props.color || '#868e96'};
	transition: linear 0.1s;

	&:hover {
		background-color: ${(props) => props.hoverBgColor || '#eaeff5'};
		border: 1px solid ${(props) => props.hoverBorderColor || 'transparent'};
		cursor: pointer;
	}
`;

const FunctionBarModule = styled.div`
	margin-left: auto;
	grid-column-start: 3;
	grid-column-end: 3;
`;

const FunctionBarInput = styled.input`
	border: none;
	outline: none;
	font-size: 1.1rem;
	padding-left: 12px;
	flex: 1;
	background-color: transparent;
`;

const FunctionBarSearch = styled.div`
	grid-column-start: 1;
	grid-column-end: 1;
	width: 100%;
	height: 46px;
	border: 1px solid #e5e8eb;
	padding: 12px 16px;
	display: flex;
	align-items: center;
	border-radius: 5px;
	background-color: #f8f9fa;
`;

const FunctionBarMaxWidth = styled.div`
	max-width: 2040px;
	min-width: 1592px;
	display: grid;
	grid-column-gap: 50px;
	grid-template-columns: 1fr 1fr 2fr;
	padding: 20px 50px;
	margin: 0 auto;
`;

const FunctionBarContainer = styled.div`
	width: 100%;
`;

export {
	FunctionBarContainer,
	FunctionBarMaxWidth,
	FunctionBarSearch,
	FunctionBarInput,
	FunctionBarModule,
	FunctionBarButton,
	FunctionBarIcon,
};
