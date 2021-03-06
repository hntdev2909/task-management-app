import React from 'react';
import {
	FunctionBarContainer,
	FunctionBarSearch,
	FunctionBarInput,
	FunctionBarModule,
	FunctionBarButton,
	FunctionBarIcon,
	FunctionBarMaxWidth,
} from './FunctionBar.styles';
import { Icons } from '../../themes';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux';

function FunctionBar() {
	const dispatch = useDispatch();

	const handleNewItem = () => {
		dispatch(openModal(true));
	};

	return (
		<FunctionBarContainer>
			<FunctionBarMaxWidth>
				<FunctionBarSearch>
					<FunctionBarIcon
						width="20px"
						height="20px"
						src={Icons.searchIcon.default}
					/>
					<FunctionBarInput placeholder="Search Items" />
				</FunctionBarSearch>
				<FunctionBarModule>
					<FunctionBarButton
						bgColor="#004cff"
						color="white"
						hoverBgColor="#0b54ff"
						onClick={() => handleNewItem()}
					>
						<FunctionBarIcon
							width="14px"
							height="14px"
							src={Icons.plusIcon.default}
							margin="0 10px 0 0"
						/>
						New Item
					</FunctionBarButton>
					<FunctionBarButton margin="0 0 0 10px" hoverBorderColor="#d2d4d6">
						<FunctionBarIcon
							width="14px"
							height="14px"
							src={Icons.filterIcon.default}
							margin="0 10px 0 0"
						/>
						Filter
					</FunctionBarButton>
					<FunctionBarButton margin="0 0 0 10px" hoverBorderColor="#d2d4d6">
						Board
						<FunctionBarIcon
							width="12px"
							height="12px"
							src={Icons.downArrowIcon.default}
							margin="0 0 0 10px"
						/>
					</FunctionBarButton>
				</FunctionBarModule>
			</FunctionBarMaxWidth>
		</FunctionBarContainer>
	);
}

export default FunctionBar;
