import React from 'react';
import {
	ListCardTaskContainer,
	ListCardTaskItem,
	ListCardHeader,
	ListCardButton,
	ListCardIcon,
	ListCardModule,
	ListCardTitle,
	ListCardCount,
} from './ListCardTask.styles';

import CardTask from '../CardTask';

import { Icons } from '../../themes';

function ListCardTask() {
	return (
		<ListCardTaskContainer>
			<ListCardTaskItem>
				<ListCardHeader>
					<ListCardTitle>
						To do<ListCardCount>3</ListCardCount>
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
				<CardTask />
				<CardTask />
				<CardTask />
			</ListCardTaskItem>
			<ListCardTaskItem>
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
			</ListCardTaskItem>
		</ListCardTaskContainer>
	);
}

export default ListCardTask;
