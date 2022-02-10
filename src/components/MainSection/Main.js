import React, { useState, useEffect } from 'react';
import {
	MainContainer,
	MainBg,
	VideoBg,
	ImageBg,
	MainContent,
	MainPortrait,
	MainH1,
	MainH2,
	MainBtnWrap,
	DefaultArrow,
	RightArrow,
} from './MainElements';

import video from '../../videos/video1.mp4';
// import bgImage from '../../images/black-sand.jpg';
import bgImage from '../../images/greyBg.jpg';
import portrait from '../../images/linkedin-image-redux.jpg';
import { Button } from '../Button/Button';

import resumeLink from '../../files/david-caldwell-resume.pdf';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
	useEffect(() => {
		AOS.init({ duration: 5000 });
	}, []);

	const openResume = () => {
		window.open(resumeLink, '_blank');
	};

	return (
		<>
			<MainContainer>
				<MainBg>
					{/* <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg> */}
					<ImageBg src={bgImage} />
				</MainBg>
				<MainContent>
					{/* <MainPortrait src={portrait} /> */}
					{/* <div data-aos="fade-down-left"> */}
					<MainH1>David Caldwell</MainH1>
					{/* </div> */}
					{/* <div data-aos="fade-down-right"> */}
					<MainH2>Web Developer</MainH2>
					{/* </div> */}
					<div data-aos="flip-up">
						<MainBtnWrap>
							<Button
								// to="projects"
								to="projects"
								spy={true}
								smooth={true}
								offset={-20}
								duration={500}
								primary={'true'}
								big={'true'}
							>
								See My Projects
							</Button>
							<Button big={true} primary={true} onClick={openResume}>
								View My Resume (PDF)
							</Button>
						</MainBtnWrap>
					</div>
				</MainContent>
			</MainContainer>
		</>
	);
};

export default Main;
