import styled from 'styled-components';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

export const FooterContainer = styled.div`
	background-color: #000;
`;

export const FooterWrap = styled.div`
	padding: 4rem calc((100vw - 1300px) / 2);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;

	@media screen and (max-width: 1280px) {
		padding: 4rem 4rem;
	}
	@media screen and (max-width: 1280px) {
		grid-template-columns: 1fr;

		grid-template-rows: 1fr;
	}
`;
export const FooterLinksWrap = styled.div`
	padding: 48px 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: 1100px;
	margin: 0 auto;
`;

export const FooterLinkItems = styled.div`
	margin: 0rem 1rem;
`;

export const FooterLink = styled.img`
	cursor: pointer;
	margin: 0rem 1rem;
	width: 70px;
	height: 70px;
`;

export const FooterContactWrap = styled.div`
	height: 100%;
	display: flex;
`;

export const FooterContact = styled.form`
	background: #fff;
	max-width: 600px;
	height: auto;
	width: 100%;
	display: grid;
	margin: 0 auto;
	padding: 60px 32px;
	border-radius: 10px;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const FormH1 = styled.h1`
	color: #000;
	text-align: center;
	margin-top: -30px;
	margin-bottom: 40px;
`;

export const FormInput = styled.input`
	padding: 1rem 1rem;
	margin-bottom: 2rem;
	border: 2px solid #000;
`;

export const FormInputArea = styled.textarea`
	padding: 1rem 1rem;
	margin-bottom: 2rem;
	border: 2px solid #000;
	height: 200px;
`;

export const FooterInfo = styled.div`
	color: #fff;
	align-items: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		text-align: center;
		font-size: 34px;
	}

	p {
		text-align: center;
		font-size: 26px;
	}

	@media screen and (max-width: 1280px) {
		padding: 3rem 0rem;
	}
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Gh = styled(BsGithub)`
	font-size: 50px;
	margin: 0rem 1rem;
	cursor: pointer;
	transition: 0.3s all ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Li = styled(BsLinkedin)`
	font-size: 50px;
	margin: 0rem 1rem;
	cursor: pointer;
	transition: 0.3s all ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

export const LocationIcon = styled(BiCurrentLocation)`
	padding-right: 10px;
	padding-top: 18px;
	font-size: 40px;
`;

export const EmailIcon = styled(MdEmail)`
	padding-right: 10px;
	padding-top: 18px;
	font-size: 40px;
`;
