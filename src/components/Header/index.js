import React from 'react';
import {
	HeaderContainer,
	HeaderTitle,
	HeaderTitleText,
	HeaderTag,
	HeaderMemberList,
	HeaderImage,
	HeaderButtonTransparent,
	HeaderMemberListImage,
	HeaderMemberListImageItem,
	HeaderButton,
	HeaderMaxwidth,
} from './Header.styles';

import { Images } from '../../themes';

function Header() {
	return (
		<HeaderContainer>
			<HeaderMaxwidth>
				<HeaderTitle>
					<HeaderTitleText>Product Design Team</HeaderTitleText>
					<HeaderTag>Sprint 8</HeaderTag>
				</HeaderTitle>
				<HeaderMemberList>
					<HeaderMemberListImage>
						<HeaderMemberListImageItem>
							<HeaderImage src="https://www.w3schools.com/html/img_girl.jpg"></HeaderImage>
						</HeaderMemberListImageItem>
						<HeaderMemberListImageItem>
							<HeaderImage src={Images.img2.default}></HeaderImage>
						</HeaderMemberListImageItem>
						<HeaderMemberListImageItem>
							<HeaderImage src={Images.img1.default}></HeaderImage>
						</HeaderMemberListImageItem>
					</HeaderMemberListImage>
					<HeaderButton>
						<HeaderButtonTransparent>+ New member</HeaderButtonTransparent>
					</HeaderButton>
				</HeaderMemberList>
			</HeaderMaxwidth>
		</HeaderContainer>
	);
}

export default Header;
