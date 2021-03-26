import React, { useEffect, useState } from 'react';
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
} from './Modal.styles';
import { Icons } from '../../themes';
import moment from 'moment';
import CardReview from '../CardReview';
import { useStateValue } from '../../StateProvider';
import _ from 'lodash';

function Modal({ display, callback, btnModal, taskEditing }) {
	const [{ tasks }, dispatch] = useStateValue();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [tag, setTag] = useState('');
	const [color, setColor] = useState('#f6fdf7+#3db452');

	const handleCloseModal = () => {
		callback('close');
		setTitle('');
		setDescription('');
		setTag('');
	};

	const handleSaveTask = () => {
		const tmpColor = color?.split('+');
		const bgColor = tmpColor[0];
		const textColor = tmpColor[1];
		let taskKey;

		if (taskEditing) {
			if (btnModal === 'Lưu') {
				taskKey = taskEditing.id;

				dispatch({
					type: 'EDIT_TASK',
					payload: {
						taskId: taskKey,
						newData: {
							id: taskKey,
							title: title,
							tag: {
								name: tag,
								bgColor: bgColor,
								color: textColor,
							},
							content: description,
							createdAt: moment().format('MMM Do'),
						},
					},
				});
			}
		}

		if (btnModal === 'Thêm') {
			taskKey = `task-${Object.keys(tasks).length + 1}`;
			dispatch({
				type: 'ADD_NEW_TASK',
				payload: {
					taskId: taskKey,
					newData: {
						id: taskKey,
						title: title,
						tag: {
							name: tag,
							bgColor: bgColor,
							color: textColor,
						},
						content: description,
						createdAt: moment().format('MMM Do'),
					},
				},
			});
		}
		callback('close');
		setTitle('');
		setDescription('');
		setTag('');
		setColor('');
		taskKey = '';
	};

	const handleDeleteTask = () => {
		dispatch({
			type: 'DELETE_TASK',
			payload: {
				id: taskEditing.id,
			},
		});
		callback('close');
		setTitle('');
		setDescription('');
		setTag('');
		setColor('');
	};

	const handleSelectRadio = (value) => {
		setColor(value);
	};

	useEffect(() => {
		if (taskEditing) {
			setTitle(taskEditing?.title);
			setDescription(taskEditing?.content);
			setTag(taskEditing?.tag?.name);
		}
	}, [taskEditing]);

	return (
		<ModalContainer display={display}>
			<ModalBox>
				<ModalHeader>
					<ModalText fontSize="1.2rem">Add New Task</ModalText>
					<ModalHeaderModule>
						<ModalButton fontSize="1rem">
							<ModalIcon
								width="20px"
								height="20px"
								src={Icons.speakerIcon.default}
							/>
							Give Feedback
						</ModalButton>
						<ModalButton onClick={handleDeleteTask}>
							<ModalIcon
								width="20px"
								height="20px"
								src={Icons.deleteIcon.default}
							/>
						</ModalButton>
						<ModalButton>
							<ModalIcon
								width="20px"
								height="20px"
								src={Icons.fullScreenIcon.default}
							/>
						</ModalButton>
						<ModalButton onClick={handleCloseModal}>
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
								<ModalInput
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									placeholder="Type title"
								/>
							</ModalFormControl>
							<ModalFormControl>
								<ModalLabel>Description:</ModalLabel>
								<ModalTextArea
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									rows="4"
									placeholder="Type desciption"
								/>
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
								<ModalInput
									value={tag}
									onChange={(e) => setTag(e.target.value)}
									placeholder="Type tag"
								/>
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
									/>{' '}
									Color 1
								</ModalLabel>
								<ModalLabel>
									<ModalRadio
										value="#f8f0fc+#b146ca"
										onClick={(e) => handleSelectRadio(e.target.value)}
										type="radio"
										name="color"
									/>{' '}
									Color 2
								</ModalLabel>
								<ModalLabel>
									<ModalRadio
										value="#fff9db+#f5a003"
										onClick={(e) => handleSelectRadio(e.target.value)}
										type="radio"
										name="color"
									/>{' '}
									Color 3
								</ModalLabel>
							</ModalFormControl>
							<ModalSubmit onClick={handleSaveTask}>{btnModal}</ModalSubmit>
						</ModalForm>
					</ModalContentPost>
					<ModalContentDescription>
						<CardReview
							title={title}
							description={description}
							tag={tag}
							color={color}
						/>
					</ModalContentDescription>
				</ModalContent>
			</ModalBox>
		</ModalContainer>
	);
}

export default Modal;
