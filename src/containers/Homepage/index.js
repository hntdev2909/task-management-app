import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { HomepageContainer } from './Homepage.styles';
import { Header, FunctionBar, ListCardTask } from '../../components';
import { DragDropContext } from 'react-beautiful-dnd';

import initialData from '../../data/initialData';

const reorder = (list, startIndex, endIndex) => {
	const [removed] = list.splice(startIndex, 1);
	list.splice(endIndex, 0, removed);

	return list;
};

function Homepage() {
	const [data, setData] = useState(initialData);

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		// TODO reoder our column
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
		const listTaskChanged = tmpData.columns[column].tasksId;

		const items = reorder(
			listTaskChanged,
			result.source.index,
			result.destination.index
		);

		setData(tmpData);
	};

	return (
		<HomepageContainer>
			<Header />
			<FunctionBar />
			<DragDropContext onDragEnd={onDragEnd}>
				{_.map(data.columnOrder, (columnId) => {
					const column = data.columns[columnId];
					const tasks = _.map(column.tasksId, (taskId) => data.tasks[taskId]);
					return <ListCardTask key={column.id} column={column} tasks={tasks} />;
				})}
			</DragDropContext>
		</HomepageContainer>
	);
}

export default Homepage;
