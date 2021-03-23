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
} from './Header.styles';

function Header() {
	return (
		<HeaderContainer>
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
						<HeaderImage src="https://www.w3schools.com/html/img_girl.jpg"></HeaderImage>
					</HeaderMemberListImageItem>
					<HeaderMemberListImageItem>
						<HeaderImage src="https://www.w3schools.com/html/img_girl.jpg"></HeaderImage>
					</HeaderMemberListImageItem>
					<HeaderMemberListImageItem>
						<HeaderImage src="https://www.w3schools.com/html/img_girl.jpg"></HeaderImage>
					</HeaderMemberListImageItem>
				</HeaderMemberListImage>
				<HeaderButton>
					<HeaderButtonTransparent>+ New member</HeaderButtonTransparent>
				</HeaderButton>
			</HeaderMemberList>
		</HeaderContainer>
	);
}

export default Header;
