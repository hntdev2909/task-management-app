import React, { useState, useEffect } from 'react';
import {
	ModalContainer,
	ModalHeader,
	ModalContent,
	ModalButton,
	ModalIcon,
	ModalText,
	ModalRadio,
	ModalBox,
	ModalHeaderModule,
	ModalContentPost,
	ModalContentDescription,
	ModalInput,
	ModalForm,
	ModalLabel,
	ModalFormControl,
	ModalTextArea,
	ModalSubmit,
	ModalEditable,
	ModalEditableTextArea,
	ModalLoadingFrames,
} from './Modal.styles';
import { Icons } from '../../themes';
import moment from 'moment';
import CardReview from '../CardReview';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
	openModal,
	editing,
	callEditTask,
	callAddTask,
	callDeleteTask,
} from '../../redux';
import { Spinner } from '../index';

function Modal() {
	const { tmpTask, tmpColumn } = useSelector((state) => state.task);
	const { isOpenModal, isEditing } = useSelector((state) => state.modal);
	const dispatch = useDispatch();
	const { isLoadingServer } = useSelector((state) => state.loading);

	const [tmpTitle, setTmpTitle] = useState('');
	const [tmpDescription, setTmpDescription] = useState('');
	const [tmpTag, setTmpTag] = useState('');
	const [tmpColor, setTmpColor] = useState('#f6fdf7+#3db452');

	const resetValueInput = () => {
		setTmpTitle('');
		setTmpDescription('');
		setTmpTag('');
		setTmpColor('');
	};

	const handleSaveTask = () => {
		const tmpArrColor = tmpColor?.split('+');
		const bgColor = tmpArrColor[0];
		const textColor = tmpArrColor[1];

		if (!isEditing) {
			let tmpData = {
				newData: {
					title: tmpTitle,
					tag: {
						name: tmpTag,
						bgColor: bgColor,
						color: textColor,
					},
					content: tmpDescription,
					createdAt: moment().format('MMM Do'),
				},
			};

			dispatch(callAddTask(tmpData));
		} else {
			let tmpData = {
				_id: tmpTask._id,
				taskId: tmpTask._id,
				newData: {
					id: tmpTask._id,
					title: tmpTitle,
					tag: {
						name: tmpTag,
						bgColor: bgColor,
						color: textColor,
					},
					content: tmpDescription,
					createdAt: moment().format('MMM Do'),
				},
			};
			dispatch(callEditTask(tmpData));
		}
		resetValueInput();
	};

	const handleClose = () => {
		dispatch(openModal(false));
		if (isEditing) {
			dispatch(editing(false));
		}
	};

	const handleSelectRadio = (value) => {
		setTmpColor(value);
	};

	const handleDeleteTask = () => {
		dispatch(callDeleteTask(tmpTask._id, tmpColumn));

		resetValueInput();
	};

	useEffect(() => {
		if (!_.isEmpty(tmpTask) && isEditing) {
			setTmpTitle(tmpTask.newData.title);
			setTmpDescription(tmpTask.newData.content);
			setTmpTag(tmpTask.newData.tag.name);
			setTmpColor(
				`${tmpTask.newData.tag.bgColor}+${tmpTask.newData.tag.color}`
			);
		} else {
			resetValueInput();
		}
	}, [isEditing, tmpTask]);

	return (
		<ModalContainer display={isOpenModal ? 'flex' : 'none'}>
			<ModalBox>
				{isLoadingServer && (
					<ModalLoadingFrames>
						<Spinner></Spinner>
					</ModalLoadingFrames>
				)}
				<ModalHeader>
					<ModalText fontSize="1.2rem">Add New Task</ModalText>
					<ModalHeaderModule>
						{isEditing ? (
							<ModalButton onClick={handleDeleteTask}>
								<ModalIcon
									width="20px"
									height="20px"
									src={Icons.deleteIcon.default}
								/>
							</ModalButton>
						) : (
							''
						)}
						<ModalButton>
							<ModalIcon
								width="20px"
								height="20px"
								src={Icons.fullScreenIcon.default}
							/>
						</ModalButton>
						<ModalButton onClick={() => handleClose()}>
							<ModalIcon
								width="20px"
								height="20px"
								src={Icons.closeIcon.default}
							/>
						</ModalButton>
					</ModalHeaderModule>
				</ModalHeader>
				<ModalContent>
					<ModalContentPost>
						<ModalForm>
							<ModalFormControl>
								<ModalLabel>Title:</ModalLabel>
								{isEditing ? (
									<ModalEditable
										fontSize="1.4rem"
										onChange={(e) => setTmpTitle(e.target.value)}
										value={tmpTitle}
									/>
								) : (
									<ModalInput
										fontSize="1.5rem"
										value={tmpTitle}
										onChange={(e) => setTmpTitle(e.target.value)}
										placeholder="Type title"
									/>
								)}
							</ModalFormControl>
							<ModalFormControl>
								<ModalLabel>Description:</ModalLabel>
								{isEditing ? (
									<ModalEditableTextArea
										value={tmpDescription}
										onChange={(e) => setTmpDescription(e.target.value)}
									/>
								) : (
									<ModalTextArea
										value={tmpDescription}
										onChange={(e) => setTmpDescription(e.target.value)}
										rows="4"
										placeholder="Type desciption"
									/>
								)}
							</ModalFormControl>
							<ModalFormControl>
								<ModalLabel>Tag:</ModalLabel>
								{isEditing ? (
									<ModalEditable
										onChange={(e) => setTmpTag(e.target.value)}
										value={tmpTag}
									/>
								) : (
									<ModalInput
										value={tmpTag}
										onChange={(e) => setTmpTag(e.target.value)}
										placeholder="Type tag"
									/>
								)}
							</ModalFormControl>
							<ModalFormControl>
								<ModalLabel>Tag color:</ModalLabel>
								<ModalLabel flex="1">
									<ModalRadio
										value="#f6fdf7+#3db452"
										onClick={(e) => handleSelectRadio(e.target.value)}
										type="radio"
										name="color"
										defaultChecked
										textDecoration="none"
									/>{' '}
									Color 1
								</ModalLabel>
								<ModalLabel>
									<ModalRadio
										value="#f8f0fc+#b146ca"
										onClick={(e) => handleSelectRadio(e.target.value)}
										type="radio"
										name="color"
										textDecoration="none"
									/>{' '}
									Color 2
								</ModalLabel>
								<ModalLabel>
									<ModalRadio
										value="#fff9db+#f5a003"
										onClick={(e) => handleSelectRadio(e.target.value)}
										type="radio"
										name="color"
										textDecoration="none"
									/>{' '}
									Color 3
								</ModalLabel>
							</ModalFormControl>
							<ModalSubmit onClick={handleSaveTask}>
								{isEditing ? 'Lưu' : 'Thêm'}
							</ModalSubmit>
						</ModalForm>
					</ModalContentPost>
					<ModalContentDescription>
						<CardReview
							title={tmpTitle}
							description={tmpDescription}
							tag={tmpTag}
							color={tmpColor}
						/>
					</ModalContentDescription>
				</ModalContent>
			</ModalBox>
		</ModalContainer>
	);
}

export default Modal;
