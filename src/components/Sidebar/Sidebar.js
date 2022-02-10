import React from 'react';

import resumeLink from '../../files/david-caldwell-resume.pdf';

import {
	SidebarContainer,
	CloseIcon,
	Icon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarBtn,
	Gh,
	Li,
} from './SidebarElements';

const openGitHub = () => {
	const url = 'https://github.com/Djosc';
	window.open(url, '_blank');
};

const openLinkedIn = () => {
	const url = 'https://www.linkedin.com/in/david-caldwell-4663b9205/';
	window.open(url, '_blank');
};

const openResume = () => {
	window.open(resumeLink, '_blank');
};

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink
							to="about"
							spy={true}
							smooth={true}
							offset={-79}
							duration={500}
							onClick={toggle}
						>
							About
						</SidebarLink>
						<SidebarLink
							to="projects"
							spy={true}
							smooth={true}
							offset={-79}
							duration={500}
							onClick={toggle}
						>
							Projects
						</SidebarLink>
						<SidebarLink to="contact" onClick={toggle}>
							Contact
						</SidebarLink>
						<SidebarLink>
							<Gh onClick={openGitHub} />
							<Li onClick={openLinkedIn} />
						</SidebarLink>
					</SidebarMenu>
					<SideBtnWrap>
						<SidebarBtn onClick={openResume}>View My Resume (PDF)</SidebarBtn>
					</SideBtnWrap>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
