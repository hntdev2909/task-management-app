import React, { useEffect } from 'react';
import _ from 'lodash';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
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
	ListCardDiv,
} from './ListCardTask.styles';

import CardTask from '../CardTask';

import { Icons } from '../../themes';

function ListCardTask({ data, callback }) {
	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const tmpData = { ...data };
		const column = result.destination.droppableId;

		const start = tmpData.columns[source.droppableId];
		const finish = tmpData.columns[destination.droppableId];

		if (start === finish) {
			const newTaskIds = Array.from(start.tasksId);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				tasksId: newTaskIds,
			};

			console.log();

			const newData = {
				...tmpData,
				columns: {
					...tmpData.columns,
					[newColumn.id]: newColumn,
				},
			};
			callback(newData);
			return;
		}

		const startTasksId = Array.from(start.tasksId);
		startTasksId.splice(source.index, 1);
		const newStart = {
			...start,
			tasksId: startTasksId,
		};

		const finishTasksId = Array.from(finish.tasksId);
		finishTasksId.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			tasksId: finishTasksId,
		};

		const newData = {
			...tmpData,
			columns: {
				...tmpData.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};

		callback(newData);
	};

	return (
		<ListCardTaskContainer>
			<DragDropContext onDragEnd={onDragEnd}>
				{_.map(data.columnOrder, (columnId, index) => {
					const column = data.columns[columnId];
					const tasks = _.map(column.tasksId, (taskId) => data.tasks[taskId]);
					return (
						<ListCardTaskItem key={index}>
							<ListCardHeader>
								<ListCardTitle>
									{column.title}
									<ListCardCount>{tasks.length}</ListCardCount>
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
									<ListCard
										ref={provided.innerRef}
										{...provided.droppableProps}
									>
										{_.map(tasks, (task, index) => (
											<CardTask index={index} key={task.id} task={task} />
										))}
										{provided.placeholder}
									</ListCard>
								)}
							</Droppable>
						</ListCardTaskItem>
					);
				})}
			</DragDropContext>
		</ListCardTaskContainer>
	);
}

export default ListCardTask;
