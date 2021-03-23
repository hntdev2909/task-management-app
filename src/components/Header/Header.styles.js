import styled from 'styled-components';

const HeaderButtonTransparent = styled.a`
	font-size: 1.1rem;
	border: 1.5px solid transparent;
	color: #004cff;
	padding: 8px 16px;
	transition: linear 0.1s;

	&:hover {
		border: 1.5px solid #004cff;
		cursor: pointer;
		border-radius: 5px;
	}
`;

const HeaderButton = styled.div`
	padding-left: 24px;
	border-left: 2px solid #ccc;
`;

const HeaderImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 2px solid white;
	transition: linear 0.05s;

	&:hover {
		transform: translateY(-3px);
		cursor: pointer;
		border: 2px solid #ccc;
	}
`;

const HeaderMemberListImageItem = styled.div`
	width: 34px;
	height: 34px;
	position: absolute;

	&:first-child {
		left: 82.5px;
	}

	&:nth-child(2) {
		left: 57.5px;
	}

	&:nth-child(3) {
		left: 32.5px;
	}

	&:last-child {
		left: 5px;
	}
`;

const HeaderMemberListImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-right: 24px;
	width: 145px;
	position: relative;
`;

const HeaderMemberList = styled.div`
	display: flex;
	align-items: center;
`;

const HeaderTag = styled.span`
	display: inline-block;
	font-size: 1rem;
	padding: 4px 12px;
	background-color: #004cff;
	color: white;
	font-weight: 400;
	border-radius: 5px;
	margin-left: 24px;

	&:hover {
		filter: brightness(130%);
		cursor: pointer;
	}
`;

const HeaderTitleText = styled.p`
	margin-bottom: 0;
	font-size: 1.4rem;
`;

const HeaderTitle = styled.div`
	display: flex;
`;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 76px;
	background-color: #eee;
	border-bottom: 1px solid #ccc;
	padding: 0 48px;
`;

export {
	HeaderContainer,
	HeaderTitle,
	HeaderTitleText,
	HeaderTag,
	HeaderMemberList,
	HeaderImage,
	HeaderButtonTransparent,
	HeaderMemberListImage,
	HeaderMemberListImageItem,
	HeaderButton,
};
