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

import { Icons } from '../../themes';

function CardTask({ task, index, callback }) {
	const handleClickTask = (taskId) => {
		callback(taskId, 'Lưu');
	};

	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided, snapshot) => (
				<CardTaskContainer
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					onClick={() => handleClickTask(task.id)}
					isDragging={snapshot.isDragging}
				>
					<CardTaskContent>
						<CardTaskTitle>{task.title}</CardTaskTitle>
						<CardTaskParagraph>
							{task.content}
							{/* Some methods maybe better than others, depending on time constraints,	system maturity, type of product. Regardless of who isperusing thereport, what is sought is accurate information revealing an overall */}
						</CardTaskParagraph>
						<CardTaskTag bgColor={task.tag.bgColor} color={task.tag.color}>
							{task.tag.name}
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
								<CardTaskText>{task?.member?.length}</CardTaskText>
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
								<CardTaskText>{task.createdAt}</CardTaskText>
							</CardTaskTime>
						</CardTaskModule>
						<CardTaskListMember>
							{_.map(task.member, (member, index) => {
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
