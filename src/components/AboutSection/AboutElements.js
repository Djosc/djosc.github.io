import styled from 'styled-components';

export const AboutSection = styled.div`
	width: 100%;
	height: 100%;
	padding: 0rem 0rem;
	margin-bottom: 2rem;
`;

export const AboutContainer = styled.div`
	padding: 0rem calc((100vw - 1400px) / 2);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-gap: 8rem;
	text-align: center;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;

		grid-template-rows: 1fr 1fr;
		/* padding: 2rem; */
		grid-gap: 4rem;
	}
`;

export const AboutColumnLeft = styled.div`
	padding-top: 2rem;
	text-align: left;
	color: #fff;
	h1 {
		text-align: center;
		padding-bottom: 2rem;
	}
	p {
		line-height: 2;
		font-size: 22px;
		padding: 0rem 3rem;
	}
`;

export const AboutColumnRight = styled.div`
	/* margin-top: 2rem; */
	color: #fff;

	h1 {
		text-align: center;
		padding-bottom: 2rem;
	}

	@media screen and (max-width: 768px) {
		padding-top: 5rem;
	}
`;

export const ImageWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	img {
		width: 150px;
		height: 150px;
		padding: 1rem 1rem;

		&:hover {
			transform: translateY(-3px);
		}
	}
`;
