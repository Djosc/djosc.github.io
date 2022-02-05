import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const SidebarContainer = styled.div`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #000;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
	color: #fff;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SidebarWrapper = styled.div`
	color: #000;
`;

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(4, 50px);
	}
`;

export const SidebarLink = styled(LinkS)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	text-decoration: none;
	list-style: none;
	transition: 0.3 all ease-in-out;
	color: #fff;
	cursor: pointer;

	&:hover {
		color: #ddd;
	}
`;

export const Gh = styled(BsGithub)`
	margin: 1rem;
	color: #fff;

	&:hover {
		color: #ddd;
		transform: scale(1.1);
	}
`;

export const Li = styled(BsLinkedin)`
	margin: 1rem;
	color: #fff;

	&:hover {
		color: #ddd;
		transform: scale(1.1);
	}
`;

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const SidebarBtn = styled.button`
	background: #fff;
	white-space: nowrap;
	padding: 16px 36px;
	margin-top: 1rem;
	color: #000;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ddd;
		color: #000;
	}
`;
