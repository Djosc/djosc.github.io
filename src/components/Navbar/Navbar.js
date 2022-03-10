import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavLink,
	NavItem,
	NavMenu,
	MobileIcon,
	Bars,
	NavBtn,
	NavBtnLink,
	Gh,
	Li,
} from './NavbarElements';

import resumeLink from '../../files/david-caldwell-resume.pdf';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 100) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const openResume = () => {
		window.open(resumeLink, '_blank');
	};

	const openGitHub = () => {
		const url = 'https://github.com/Djosc';
		window.open(url, '_blank');
	};

	const openLinkedIn = () => {
		const url = 'https://www.linkedin.com/in/david-caldwell-4663b9205/';
		window.open(url, '_blank');
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<MobileIcon onClick={toggle}>
						<Bars scrollNav={scrollNav} />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLink
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								scrollNav={scrollNav}
							>
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								to="projects"
								spy={true}
								smooth={true}
								offset={-80}
								duration={500}
								scrollNav={scrollNav}
							>
								Projects
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								to="contact"
								spy={true}
								smooth={true}
								offset={-60}
								duration={500}
								scrollNav={scrollNav}
							>
								Contact
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink scrollNav={scrollNav} onClick={openResume}>
								Resume
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink scrollNav={scrollNav}>
								<Gh onClick={openGitHub} />
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink scrollNav={scrollNav}>
								<Li onClick={openLinkedIn} />
							</NavLink>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
