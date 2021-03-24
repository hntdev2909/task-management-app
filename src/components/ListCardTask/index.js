import React, { useEffect } from 'react';
import _ from 'lodash';
import { Droppable } from 'react-beautiful-dnd';
import {
	ListCardTaskContainer,
	ListCardTaskItem,
	ListCardHeader,
	ListCardButton,
	ListCardIcon,
	ListCardModule,
	ListCardTitle,
	ListCardCount,
	ListCard,
} from './ListCardTask.styles';

import CardTask from '../CardTask';

import { Icons } from '../../themes';

function ListCardTask({ column, tasks }) {
	return (
		<ListCardTaskContainer>
			<ListCardTaskItem>
				<ListCardHeader>
					<ListCardTitle>
						{column.title}
						<ListCardCount>{column.tasksId.length}</ListCardCount>
					</ListCardTitle>
					<ListCardModule>
						<ListCardButton hoverBgColor="#d0d5d8">
							<ListCardIcon
								width="16px"
								height="16px"
								src={Icons.blackPlusIcon.default}
							/>
						</ListCardButton>
						<ListCardButton hoverBgColor="#d0d5d8">
							<ListCardIcon
								width="16px"
								height="16px"
								src={Icons.menuIcon.default}
							/>
						</ListCardButton>
					</ListCardModule>
				</ListCardHeader>

				<Droppable droppableId={column.id}>
					{(provided) => (
						<ListCard ref={provided.innerRef} {...provided.droppableProps}>
							{_.map(tasks, (task, index) => (
								<CardTask index={index} key={task.id} task={task} />
							))}
							{provided.placeholder}
						</ListCard>
					)}
				</Droppable>
			</ListCardTaskItem>
			{/* <ListCardTaskItem>
				<ListCardHeader>
					<ListCardTitle>
						In progress<ListCardCount>2</ListCardCount>
					</ListCardTitle>
					<ListCardModule>
						<ListCardButton hoverBgColor="#d0d5d8">
							<ListCardIcon
								width="16px"
								height="16px"
								src={Icons.blackPlusIcon.default}
							/>
						</ListCardButton>
						<ListCardButton hoverBgColor="#d0d5d8">
							<ListCardIcon
								width="16px"
								height="16px"
								src={Icons.menuIcon.default}
							/>
						</ListCardButton>
					</ListCardModule>
				</ListCardHeader>
			</ListCardTaskItem>
			<ListCardTaskItem>
				<ListCardHeader>
					<ListCardTitle>
						In review<ListCardCount>4</ListCardCount>
					</ListCardTitle>
					<ListCardModule>
						<ListCardButton hoverBgColor="#d0d5d8">
							<ListCardIcon
								width="16px"
								height="16px"
								src={Icons.blackPlusIcon.default}
							/>
						</ListCardButton>
						<ListCardButton hoverBgColor="#d0d5d8">
							<ListCardIcon
								width="16px"
								height="16px"
								src={Icons.menuIcon.default}
							/>
						</ListCardButton>
					</ListCardModule>
				</ListCardHeader>
			</ListCardTaskItem>
			<ListCardTaskItem>
				<ListCardHeader>
					<ListCardTitle>
						Done<ListCardCount>3</ListCardCount>
					</ListCardTitle>
					<ListCardModule>
						<ListCardButton hoverBgColor="#d0d5d8">
							<ListCardIcon
								width="16px"
								height="16px"
								src={Icons.blackPlusIcon.default}
							/>
						</ListCardButton>
						<ListCardButton hoverBgColor="#d0d5d8">
							<ListCardIcon
								width="16px"
								height="16px"
								src={Icons.menuIcon.default}
							/>
						</ListCardButton>
					</ListCardModule>
				</ListCardHeader>
			</ListCardTaskItem> */}
		</ListCardTaskContainer>
	);
}

export default ListCardTask;
