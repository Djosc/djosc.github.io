import React, { useEffect } from 'react';
import {
	Section,
	Container,
	ColumnLeft,
	ColumnRight,
	BtnWrap,
	Heading,
} from './ProjectSectionElements';
import { Button } from '../Button/Button';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectSection = ({
	heading,
	paragraphOne,
	liveLinkLabel,
	liveLink,
	githubLinkLabel,
	githubLink,
	caseStudyLinkLabel,
	caseStudyLink,
	caseStudyBool,
	videoLinkLabel,
	videoLink,
	videoBool,
	image,
	reverse,
	dark,
	primary,
	dataAOS,
	firstSection,
}) => {
	const openDemo = () => {
		const url = liveLink;
		window.open(url, '_blank');
	};

	const openGitHub = () => {
		const url = githubLink;
		window.open(url, '_blank');
	};

	const openCaseStudy = () => {
		const url = caseStudyLink;
		window.open(url, '_blank');
	};

	const openVideo = () => {
		const url = videoLink;
		window.open(url, '_blank');
	};

	return (
		<>
			<Container>
				<ColumnRight reverse={reverse}>
					<img src={image} alt="art" />
				</ColumnRight>
				<ColumnLeft reverse={reverse} dark={dark}>
					<h1>{heading}</h1>
					<p>{paragraphOne}</p>
					<BtnWrap>
						<Button to="/" onClick={openDemo} big="true" primary={primary}>
							{liveLinkLabel}
						</Button>
						<Button to="/" onClick={openGitHub} big="true" primary={primary}>
							{githubLinkLabel}
						</Button>
						{caseStudyBool ? (
							<Button to="/" onClick={openCaseStudy} big="true" primary={primary}>
								{caseStudyLinkLabel}
							</Button>
						) : (
							<></>
						)}
						{videoBool ? (
							<Button to="/" onClick={openVideo} big="true" primary={primary}>
								{videoLinkLabel}
							</Button>
						) : (
							<></>
						)}
					</BtnWrap>
				</ColumnLeft>
			</Container>
		</>
	);
};

export default ProjectSection;
