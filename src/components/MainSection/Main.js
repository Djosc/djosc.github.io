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
	DownArrow,
	ArrowWrap,
	LocationIcon,
} from './MainElements';

import bgImage from '../../images/blueBG.jpg';
// import bgImage from '../../images/greyBg.jpg';
import { Button } from '../Button/Button';

import resumeLink from '../../files/david-caldwell-resume.pdf';

import 'aos/dist/aos.css';

const Main = () => {
	const openResume = () => {
		window.open(resumeLink, '_blank');
	};

	return (
		<>
			<MainContainer>
				<MainBg>
					<ImageBg src={bgImage} />
				</MainBg>
				<MainContent>
					{/* <div data-aos="fade-down-left"> */}
					<MainH1>David Caldwell</MainH1>
					{/* </div> */}
					{/* <div data-aos="fade-down-right"> */}
					<MainH2>Web Developer</MainH2>
					{/* </div> */}
					{/* <div data-aos="flip-up"> */}
					<h1 style={{ fontSize: '36px', color: '#fff' }}>
						<LocationIcon />
						Dayton, Ohio
					</h1>
					{/* </div> */}
					{/* <div data-aos="flip-up"> */}
					<MainBtnWrap>
						<Button
							to="projects"
							spy={true}
							smooth={true}
							offset={-60}
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
					{/* </div> */}
				</MainContent>
				{/* <ArrowWrap>
					<DownArrow />
					<p>About Me</p>
				</ArrowWrap> */}
			</MainContainer>
		</>
	);
};

export default Main;
