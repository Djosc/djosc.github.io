import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
	/* background: ${({ primary }) => (primary ? '#000d1a' : '#CD853F')}; */
	background: ${({ primary }) => (primary ? '#000' : '#fff')};
	border: 2px solid black;
	white-space: nowrap;
	outline: none;
	min-width: 150px;
	max-width: 300px;
	cursor: pointer;
	text-decoration: none;
	transition: 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ big }) => (big ? '13px 16px' : '10px 16px')};
	color: ${({ primary }) => (primary ? '#fff' : '#000')};
	font-size: ${({ big }) => (big ? '15px' : '14px')};
	margin: 0rem 0.5rem;

	&:hover {
		transform: scale(1.07);
	}
`;
