import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.4rem;
	position: sticky;
	top: 0;
	z-index: 10;
	transition: 0.8s all ease;

	@media screen and (max-width: 960px) {
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 80px;
	width: 100%;
	padding: 0 24px;
	max-width: 1200px;
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 85%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
		transition: 0.3s all ease-in-out;
	}
`;

export const Bars = styled(FaBars)`
	color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#000')};
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLink = styled(LinkS)`
	color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#000')};
	/* font-weight: bold; */
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	transition: 0.2s all ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Gh = styled(BsGithub)``;

export const Li = styled(BsLinkedin)``;
