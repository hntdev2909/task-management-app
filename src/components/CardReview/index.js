import React, { useEffect, useState } from 'react';
import {
	CardReviewText,
	CardReviewListMember,
	CardReviewContainer,
	CardReviewModule,
	CardReviewTime,
	CardReviewListImageMember,
	CardReviewFlag,
	CardReviewAttach,
	CardReviewFooter,
	CardReviewImage,
	CardReviewIcon,
	CardReviewContent,
	CardReviewTag,
	CardReviewTitle,
	CardReviewParagraph,
	CardReviewImageContent,
} from './CardReview.styles';
import { Icons, Images } from '../../themes';

function CardReview({ title, description, tag, color }) {
	const [textColor, setTextColor] = useState('');
	const [bgColor, setBgColor] = useState('');

	useEffect(() => {
		if (color) {
			const tmpColor = color.split('+');
			setTextColor(tmpColor[1]);
			setBgColor(tmpColor[0]);
		}
	}, [color]);

	return (
		<CardReviewContainer>
			<CardReviewContent>
				<CardReviewTitle>{title}</CardReviewTitle>
				<CardReviewParagraph>{description}</CardReviewParagraph>
				{/* <CardReviewImageContent src={Images.wallpaper1.default} /> */}
				<CardReviewTag bgColor={bgColor} color={textColor}>
					{tag}
				</CardReviewTag>
			</CardReviewContent>
			<CardReviewFooter>
				<CardReviewModule>
					<CardReviewAttach>
						<CardReviewIcon
							width="18px"
							height="18px"
							src={Icons.attachIcon.default}
						/>
						<CardReviewText>3</CardReviewText>
					</CardReviewAttach>
					<CardReviewFlag>
						<CardReviewIcon
							width="18px"
							height="18px"
							src={Icons.flagIcon.default}
						/>
					</CardReviewFlag>
					<CardReviewTime>
						<CardReviewIcon
							width="18px"
							height="18px"
							src={Icons.clockIcon.default}
						/>
						<CardReviewText>Apr 12</CardReviewText>
					</CardReviewTime>
				</CardReviewModule>
				<CardReviewListMember>
					{/* {_.map(task.member, (member, index) => {
						let right = 25;
						return (
							<CardReviewListImageMember
								key={index}
								right={right * index + 'px'}
							>
								<CardReviewImage src={member.image} />
							</CardReviewListImageMember>
						);
					})} */}
				</CardReviewListMember>
			</CardReviewFooter>
		</CardReviewContainer>
	);
}

export default CardReview;
