import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		opacity: 0;
	} to {
		opacity: 1;
	}
`;

const ModalRadio = styled.input``;

const ModalOption = styled.label``;

const ModalTag = styled.p``;

const ModalText = styled.p`
	font-size: ${(props) => props.fontSize};
`;

const ModalIcon = styled.img``;

const ModalButton = styled.a`
	display: inline-flex;
	font-size: ${(props) => props.fontSize};
	height: 36px;
	padding: 8px 10px;
	border-radius: 5px;
	color: #7e7e7e;
	align-items: center;

	&:hover {
		background-color: #eee;
		cursor: pointer;
		color: #7e7e7e;
	}

	&:active {
		background-color: #d2e5fe;
		color: #0052cc;
	}

	&:active ${ModalIcon} {
		filter: invert(0.33) sepia(1) saturate(20) hue-rotate(190.8deg)
			brightness(0.8);
	}

	&:nth-child(1) ${ModalIcon} {
		margin-right: 8px;
	}
`;

const ModalSubmit = styled.a`
	display: block;
	background-color: #004cff;
	width: fit-content;
	padding: 8px 30px;
	font-size: 1.2rem;
	border-radius: 5px;
	color: white;
	margin: 0 auto;
`;

const ModalTextArea = styled.textarea`
	font-size: 1.05rem;
	outline: none;
	flex: 1;
	font-family: inherit;
`;
const ModalInput = styled.input`
	font-size: 1.05rem;
	outline: none;

	flex: 1;
`;
const ModalLabel = styled.label`
	font-size: 1.15rem;
	min-width: 110px;
`;
const ModalFormControl = styled.div`
	display: flex;
	margin-bottom: 25px;

	&:nth-child(5) {
		margin-bottom: 45px;
	}
`;
const ModalForm = styled.form``;

const ModalContentDescription = styled.div`
	width: 400px;
`;

const ModalContentPost = styled.div`
	flex: 1;
	margin-right: 25px;
`;

const ModalContent = styled.div`
	display: flex;
`;

const ModalHeaderModule = styled.div`
	display: flex;
`;

const ModalHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ModalBox = styled.div`
	width: 100%;
	max-width: 1040px;
	background-color: white;
	padding: 16px;
`;

const ModalContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	display: ${(props) => props.display};
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
	animation: ${fadeIn} linear 0.2s;
`;

export {
	ModalContainer,
	ModalHeaderModule,
	ModalBox,
	ModalHeader,
	ModalContent,
	ModalIcon,
	ModalTag,
	ModalText,
	ModalOption,
	ModalRadio,
	ModalContentPost,
	ModalContentDescription,
	ModalInput,
	ModalForm,
	ModalLabel,
	ModalButton,
	ModalFormControl,
	ModalTextArea,
	ModalSubmit,
};
