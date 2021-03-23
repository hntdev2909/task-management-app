import React from 'react';
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
} from './CardTask.styles';

import { Icons } from '../../themes';

function CardTask() {
	return (
		<CardTaskContainer>
			<CardTaskContent>
				<CardTaskTitle>Mobile Wireframes</CardTaskTitle>
				<CardTaskParagraph>
					Some methods maybe better than others, depending on time constraints,
					system maturity, type of product. Regardless of who is perusing the
					report, what is sought is accurate information revealing an overall
				</CardTaskParagraph>
				<CardTaskTag>Viverra diam</CardTaskTag>
			</CardTaskContent>
			<CardTaskFooter>
				<CardTaskModule>
					<CardTaskAttach>
						<CardTaskIcon
							width="18px"
							height="18px"
							src={Icons.attachIcon.default}
						/>
						<CardTaskText>3</CardTaskText>
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
						<CardTaskText>Apr 12</CardTaskText>
					</CardTaskTime>
				</CardTaskModule>
				<CardTaskListMember>
					<CardTaskImage src="https://www.w3schools.com/html/img_girl.jpg" />
				</CardTaskListMember>
			</CardTaskFooter>
		</CardTaskContainer>
	);
}

export default CardTask;
