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
} from './Modal.styles';
import { Icons } from '../../themes';
import moment from 'moment';
import CardReview from '../CardReview';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
	addTask,
	openModal,
	addTaskCol,
	editing,
	setTmpTask,
	deleteTask,
	editTask,
	deleteTaskInCol,
} from '../../redux';

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

function Modal() {
	const { tmpTask } = useSelector((state) => state.task);
	const { isOpenModal, isEditing } = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	const [tmpTitle, setTmpTitle] = useState('');
	const [tmpDescription, setTmpDescription] = useState('');
	const [tmpTag, setTmpTag] = useState('');
	const [tmpColor, setTmpColor] = useState('#f6fdf7+#3db452');

	const handleSaveTask = () => {
		const id = uuidv4();
		const tmpArrColor = tmpColor?.split('+');
		const bgColor = tmpArrColor[0];
		const textColor = tmpArrColor[1];
		if (!isEditing) {
			dispatch(
				addTask({
					taskId: id,
					newData: {
						id: id,
						title: tmpTitle,
						tag: {
							name: tmpTag,
							bgColor: bgColor,
							color: textColor,
						},
						content: tmpDescription,
						createdAt: moment().format('MMM Do'),
					},
				})
			);
			dispatch(addTaskCol(id));
		} else {
			dispatch(
				editTask({
					taskId: tmpTask.id,
					newData: {
						id: tmpTask.id,
						title: tmpTitle,
						tag: {
							name: tmpTag,
							bgColor: bgColor,
							color: textColor,
						},
						content: tmpDescription,
						createdAt: moment().format('MMM Do'),
					},
				})
			);
		}
		dispatch(openModal());
		setTmpTitle('');
		setTmpDescription('');
		setTmpTag('');
		setTmpColor('');
	};

	const handleClose = () => {
		dispatch(openModal());
		if (isEditing) {
			dispatch(editing());
		}
	};

	const handleSelectRadio = (value) => {
		setTmpColor(value);
	};

	const handleDeleteTask = () => {
		dispatch(deleteTaskInCol(tmpTask.id));
		dispatch(deleteTask(tmpTask.id));
		dispatch(editing());
		dispatch(openModal());
		setTmpTitle('');
		setTmpDescription('');
		setTmpTag('');
		setTmpColor('');
	};

	useEffect(() => {
		if (!_.isEmpty(tmpTask) && isEditing) {
			setTmpTitle(tmpTask.title);
			setTmpDescription(tmpTask.content);
			setTmpTag(tmpTask.tag.name);
			setTmpColor(`${tmpTask.tag.bgColor}+${tmpTask.tag.color}`);
		} else {
			setTmpTitle('');
			setTmpDescription('');
			setTmpTag('');
			setTmpColor('');
		}
	}, [isEditing]);

	return (
		<ModalContainer display={isOpenModal ? 'flex' : 'none'}>
			<ModalBox>
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
							{/* <ModalFormControl>
								<ModalLabel>Image:</ModalLabel>
								<ModalInput
									id="image"
									value={image}
									onChange={(e) => handleSelectImage(e.value)}
									type="file"
									name="image"
								/>
							</ModalFormControl> */}
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
