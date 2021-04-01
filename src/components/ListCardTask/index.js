import React from 'react';
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
	ListCardTaskMaxWidth,
} from './ListCardTask.styles';
import CardTask from '../CardTask';
import { Icons } from '../../themes';
import { useDispatch, useSelector } from 'react-redux';
import { changeInCol, changeBetweenCol } from '../../redux';

function ListCardTask() {
	const dispatch = useDispatch();
	const { columns, columnOrder } = useSelector((state) => state.listTask);
	const tasks = useSelector((state) => state.task);

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

		const start = columns[source.droppableId];
		const finish = columns[destination.droppableId];

		if (start === finish) {
			const col = source.droppableId;
			const newTaskIds = Array.from(start.tasksId);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			dispatch(
				changeInCol({
					col,
					newTaskIds,
				})
			);
		} else {
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

			dispatch(
				changeBetweenCol({
					columns: {
						...columns,
						[newStart.id]: newStart,
						[newFinish.id]: newFinish,
					},
				})
			);
		}
	};

	return (
		<ListCardTaskContainer>
			<ListCardTaskMaxWidth>
				<DragDropContext onDragEnd={onDragEnd}>
					{_.map(columnOrder, (columnId, index) => {
						const column = columns[columnId];
						const todos = _.map(column.tasksId, (taskId) => {
							return tasks[taskId];
						});
						return (
							<ListCardTaskItem key={index}>
								<ListCardHeader>
									<ListCardTitle>
										{column.title}
										<ListCardCount>{todos.length}</ListCardCount>
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
									{(provided, snapshot) => (
										<ListCard
											ref={provided.innerRef}
											{...provided.droppableProps}
											isDraggingOver={snapshot.isDraggingOver}
										>
											{_.map(todos, (task, index) => (
												<CardTask index={index} key={task.taskId} task={task} />
											))}
											{provided.placeholder}
										</ListCard>
									)}
								</Droppable>
							</ListCardTaskItem>
						);
					})}
				</DragDropContext>
			</ListCardTaskMaxWidth>
		</ListCardTaskContainer>
	);
}

export default ListCardTask;
