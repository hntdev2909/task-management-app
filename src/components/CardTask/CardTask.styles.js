import styled from 'styled-components';

const CardTaskParagraph = styled.p`
	font-size: 1.05rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3; /* number of lines to show */
	-webkit-box-orient: vertical;
	color: #50575d;
	margin: 12px 0;
`;

const CardTaskTitle = styled.p`
	font-size: 1.05rem;
	font-weight: 500;
`;

const CardTaskTag = styled.span`
	font-size: 0.75rem;
	text-transform: uppercase;
	font-weight: 500;
	display: inline-block;
	padding: 5px 12px;
	border-radius: 5px;
	color: ${(props) => props.color || '#4ebb61'};
	background-color: ${(props) => props.bgColor || '#ebfbee'};
`;

const CardTaskContent = styled.div`
	padding: 20px 18px;
	border-bottom: 1px solid #eee;
`;

const CardTaskIcon = styled.img``;

const CardTaskImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 2px solid white;
`;

const CardTaskListImageMember = styled.div`
	width: 34px;
	height: 34px;
	position: absolute;
	right: ${(props) => props.right};
`;

const CardTaskListMember = styled.div`
	width: 50px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CardTaskText = styled.p`
	font-size: 0.85rem;
	margin-left: 6px;
	font-weight: 500;
	color: #868e96;
`;

const CardTaskTime = styled.div`
	display: flex;
	margin-left: 6px;
`;

const CardTaskFlag = styled.div`
	margin: 0 12px;
`;

const CardTaskAttach = styled.div`
	display: flex;
	margin-right: 6px;
`;

const CardTaskModule = styled.div`
	display: flex;
`;

const CardTaskFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 18px;
`;

const CardTaskContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	min-width: 270px;
	background-color: white;
	border-radius: 7px;
	box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

export {
	CardTaskText,
	CardTaskListMember,
	CardTaskContainer,
	CardTaskModule,
	CardTaskTime,
	CardTaskListImageMember,
	CardTaskFlag,
	CardTaskAttach,
	CardTaskFooter,
	CardTaskImage,
	CardTaskIcon,
	CardTaskContent,
	CardTaskTag,
	CardTaskTitle,
	CardTaskParagraph,
};
