import React, { useEffect } from 'react';

import {
	AboutSection,
	AboutContainer,
	AboutColumnLeft,
	AboutColumnRight,
	ImageWrap,
	InfoColumn,
} from './AboutElements';

import { Tooltip } from '@mui/material';
import 'aos/dist/aos.css';

import image1 from '../../images/html5Icon.svg';
import image2 from '../../images/css3Icon.svg';
import image3 from '../../images/javascriptIcon.svg';
import image4 from '../../images/reactIcon.svg';
import image5 from '../../images/bootstrapIcon.svg';
import image6 from '../../images/styledcomponentsIcon.svg';
import image7 from '../../images/nodejsIcon.svg';
import image8 from '../../images/expressjsIcon.svg';
import image9 from '../../images/mongodbIcon.svg';

const About = () => {
	return (
		<>
			<AboutSection id="about">
				<AboutContainer>
					<AboutColumnLeft data-aos="fade-right">
						<h1>About Me</h1>
						<p>
							I'm a Web Developer with past development experience in the defense industry
							who is looking to make a full transition into the Web Development field. My
							desire is to create carefully planned, clean, responsive web applications
							using whatever tool is best for the job. The MERN stack is my current
							preference, but I'm very excited to learn more and expand my toolkit. I'm
							currently available for full-time or freelance work.
						</p>
					</AboutColumnLeft>

					<AboutColumnRight data-aos="fade-left">
						<h1>Technologies I Use</h1>
						<ImageWrap>
							<Tooltip title="HTML5">
								<img src={image1} alt="" />
							</Tooltip>
							<Tooltip title="CSS3">
								<img src={image2} alt="" />
							</Tooltip>
							<Tooltip title="Javascript">
								<img src={image3} alt="" />
							</Tooltip>
							<Tooltip title="React">
								<img src={image4} alt="" />
							</Tooltip>
							<Tooltip title="Bootstrap">
								<img src={image5} alt="" />
							</Tooltip>
							<Tooltip title="Styled Components">
								<img src={image6} alt="" />
							</Tooltip>
							<Tooltip title="Node.js">
								<img src={image7} alt="" />
							</Tooltip>
							<Tooltip title="Express.js">
								<img src={image8} alt="" />
							</Tooltip>
							<Tooltip title="MongoDB">
								<img src={image9} alt="" />
							</Tooltip>
						</ImageWrap>
					</AboutColumnRight>
				</AboutContainer>
			</AboutSection>
		</>
	);
};

export default About;
