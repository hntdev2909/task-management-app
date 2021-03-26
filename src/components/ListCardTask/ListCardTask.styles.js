import styled from 'styled-components';

const ListCardCount = styled.span`
	display: inline-block;
	width: 30px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border-radius: 50%;
	background-color: #dee2e6;
	margin-left: 10px;
`;

const ListCard = styled.div`
	border-radius: 10px;
	transition: background-color 0.2s linear;
	background-color: ${(props) => (props.isDraggingOver ? '#ddd' : '#eee')};
`;

const ListCardIcon = styled.img``;

const ListCardButton = styled.a`
	display: inline-flex;
	width: 30px;
	height: 30px;
	justify-content: center;
	align-items: center;
	background-color: #dee2e6;
	border-radius: 50%;
	transition: linear 0.1s;

	&:nth-child(1) {
		margin-right: 10px;
	}

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.hoverBgColor};
	}
`;

const ListCardModule = styled.div``;

const ListCardTitle = styled.p`
	font-size: 1rem;
	font-weight: 500;
`;

const ListCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ListCardTaskItem = styled.div`
	height: fit-content;
	padding: 16px 20px;
	background-color: #f8f9fa;
	border-radius: 10px;
	min-width: 325px;
`;

const ListCardTaskMaxWidth = styled.div`
	max-width: 2040px;
	display: grid;
	grid-column-gap: 50px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	padding: 20px 50px;
	margin: 0 auto;
`;

const ListCardTaskContainer = styled.div`
	width: 100%;
	// height: 100%;
`;

const ListCardDiv = styled.div``;

export {
	ListCardTaskContainer,
	ListCardDiv,
	ListCardCount,
	ListCardModule,
	ListCardTaskItem,
	ListCardHeader,
	ListCardButton,
	ListCardIcon,
	ListCardTitle,
	ListCard,
	ListCardTaskMaxWidth,
};
