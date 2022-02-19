import styled from 'styled-components';
import { BsArrowRight, BsArrowDown } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';

export const MainContainer = styled.div`
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	top: -100px;
	height: calc(100vh - 100px);
	/* width: 100vw; */
	position: relative;
	/* z-index: 1; */
`;

export const MainBg = styled.div`
	/* position: fixed; */
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	/* overflow: hidden; */
	/* background-attachment: fixed; */
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	/* background: #232a34; */
`;

export const ImageBg = styled.img`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
`;

export const MainContent = styled.div`
	z-index: 3;
	top: 35%;
	left: 20%;
	max-width: 1200px;
	position: absolute;
	/* padding: 8px 24px; */
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 1280px) {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const MainH1 = styled.h1`
	color: #fff;
	font-size: 72px;
	text-align: center;

	@media screen and (max-width: 1280px) {
		font-size: 64px;
	}

	@media screen and (max-width: 768px) {
		font-size: 48px;
	}

	@media screen and (max-width: 480px) {
		font-size: 44px;
	}
`;

export const MainH2 = styled.h1`
	color: #000;
	font-size: 72px;
	text-align: center;

	@media screen and (max-width: 1280px) {
		font-size: 64px;
	}

	@media screen and (max-width: 768px) {
		font-size: 48px;
	}

	@media screen and (max-width: 480px) {
		font-size: 44px;
	}
`;

export const MainPortrait = styled.img`
	width: 400px;
	height: 600px;
	border-radius: 50px;
`;

export const MainBtnWrap = styled.div`
	margin-top: 32px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const ArrowWrap = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	text-align: center;

	p {
		color: #fff;
		font-size: 34px;
	}
`;

export const DefaultArrow = styled(BsArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;

export const RightArrow = styled(BsArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;

export const DownArrow = styled(BsArrowDown)`
	font-size: 100px;
	color: #fff;
`;

export const LocationIcon = styled(BiCurrentLocation)`
	padding-right: 10px;
	padding-top: 14px;
	font-size: 45px;
`;
