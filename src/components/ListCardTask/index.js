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
import { callEditList } from '../../redux';

function ListCardTask() {
	const dispatch = useDispatch();
	const { columns, columnOrder } = useSelector((state) => state.listTask);
	const tasks = useSelector((state) => state.task);

	const onDragEnd = (result) => {
		dispatch(
			callEditList({
				result,
			})
		);
	};

	return (
		<ListCardTaskContainer>
			<ListCardTaskMaxWidth>
				<DragDropContext onDragEnd={onDragEnd}>
					{_.map(columnOrder, (columnId, index) => {
						let column = _.filter(
							columns,
							(column) => column.columnName === columnId
						);
						const todos = _.map(column[0].tasksId, (taskId) => {
							return tasks[taskId.id];
						});

						return (
							<ListCardTaskItem key={index}>
								<ListCardHeader>
									<ListCardTitle>
										{column[0].title}
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
								<Droppable droppableId={column[0]._id}>
									{(provided, snapshot) => (
										<ListCard
											ref={provided.innerRef}
											{...provided.droppableProps}
											isDraggingOver={snapshot.isDraggingOver}
										>
											{_.map(todos, (task, index) => {
												return (
													<CardTask
														index={index}
														key={task.taskId}
														task={task}
														column={column}
													/>
												);
											})}
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
