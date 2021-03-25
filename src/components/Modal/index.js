import React, { useState } from 'react';
import {
	ModalContainer,
	ModalHeader,
	ModalContent,
	ModalButton,
	ModalIcon,
	ModalTag,
	ModalText,
	ModalOption,
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

function Modal({ display, callback, callbackData, data }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [tag, setTag] = useState('');
	const [color, setColor] = useState('');
	// const [image, setImage] = useState('');

	const handleCloseModal = () => {
		callback(true);
	};

	const handleAddNewTask = (values) => {
		const tmpColor = color?.split('+');
		const bgColor = tmpColor[0];
		const textColor = tmpColor[1];
		const newData = {
			id: `task-${Object.keys(data.tasks).length + 1}`,
			title: title,
			tag: {
				name: tag,
				bgColor: bgColor,
				color: textColor,
			},
			content: description,
			createdAt: moment().format('MMM Do'),
		};

		callbackData(newData);
		callback(true);
		setTitle('');
		setDescription('');
		setTag('');
		setColor('');
	};

	// const handleSelectImage = (val) => {
	// 	const selectedFile = document.getElementById('image').files[0];
	// 	console.log(selectedFile);
	// 	setImage(selectedFile.name);
	// };

	const handleSelectRadio = (value) => {
		setColor(value);
	};

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
						<ModalButton>
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
							<ModalSubmit onClick={handleAddNewTask}>Thêm</ModalSubmit>
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
