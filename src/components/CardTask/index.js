import React from 'react';
import _ from 'lodash';
import { Draggable } from 'react-beautiful-dnd';
import {
	CardTaskContainer,
	CardTaskModule,
	CardTaskTime,
	CardTaskFlag,
	CardTaskAttach,
	CardTaskFooter,
	CardTaskImage,
	CardTaskIcon,
	CardTaskContent,
	CardTaskTag,
	CardTaskTitle,
	CardTaskParagraph,
	CardTaskText,
	CardTaskListMember,
	CardTaskListImageMember,
} from './CardTask.styles';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, editing, setTmpTask } from '../../redux';
import { Icons } from '../../themes';

function CardTask({ task, index, column }) {
	const dispatch = useDispatch();

	const handleEdit = (taskId) => {
		dispatch(setTmpTask(task, column[0]?._id));
		dispatch(openModal(true));
		dispatch(editing(true));
	};

	return (
		<Draggable draggableId={task.taskId} index={index}>
			{(provided, snapshot) => (
				<CardTaskContainer
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					onClick={() => handleEdit(task.taskId)}
					isDragging={snapshot.isDragging}
				>
					<CardTaskContent>
						<CardTaskTitle>{task.newData.title}</CardTaskTitle>
						<CardTaskParagraph>{task.newData.content}</CardTaskParagraph>
						<CardTaskTag
							bgColor={task.newData.tag.bgColor}
							color={task.newData.tag.color}
						>
							{task.newData.tag.name}
						</CardTaskTag>
					</CardTaskContent>
					<CardTaskFooter>
						<CardTaskModule>
							<CardTaskAttach>
								<CardTaskIcon
									width="18px"
									height="18px"
									src={Icons.attachIcon.default}
								/>
								<CardTaskText>{task?.newData.member?.length}</CardTaskText>
							</CardTaskAttach>
							<CardTaskFlag>
								<CardTaskIcon
									width="18px"
									height="18px"
									src={Icons.flagIcon.default}
								/>
							</CardTaskFlag>
							<CardTaskTime>
								<CardTaskIcon
									width="18px"
									height="18px"
									src={Icons.clockIcon.default}
								/>
								<CardTaskText>{task.newData.createdAt}</CardTaskText>
							</CardTaskTime>
						</CardTaskModule>
						<CardTaskListMember>
							{_.map(task.newData.member, (member, index) => {
								let right = 25;
								return (
									<CardTaskListImageMember
										key={index}
										right={right * index + 'px'}
									>
										<CardTaskImage src={member.image} />
									</CardTaskListImageMember>
								);
							})}
						</CardTaskListMember>
					</CardTaskFooter>
				</CardTaskContainer>
			)}
		</Draggable>
	);
}

export default CardTask;
