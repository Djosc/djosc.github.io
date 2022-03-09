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
import image5 from '../../images/typescriptIcon.svg';
import image6 from '../../images/angularIcon.svg';
import image7 from '../../images/bootstrapIcon.svg';
import image8 from '../../images/styledcomponentsIcon.svg';
import image9 from '../../images/nodejsIcon.svg';
import image10 from '../../images/expressjsIcon.svg';
import image11 from '../../images/mongodbIcon.svg';
import image12 from '../../images/wordpressIcon.svg';

const About = () => {
	return (
		<>
			<AboutSection id="about">
				<AboutContainer className="spacer layer1">
					<AboutColumnLeft>
						<h1>About Me</h1>
						<p>
							I’m a Web Developer with a strong desire to grow and learn the best
							technology for the job. My transition into Web Development has allowed me to
							become well-versed in front-end and back-end technologies. My current
							preference is the MERN stack, but I have a strong desire to keep expanding
							my toolkit.
						</p>
						<br />
						<p>
							My experience working in the defense industry allowed me to develop the
							skills to thoroughly plan, gather project requirements, gather feedback, and
							effectively work along-side team members within the scope of a larger
							corporate environment.
						</p>
						<br />
						<p>
							As I continue my Web Development journey, my goal is to find a role in which
							I can create clean, responsive web applications while being a key member of
							the team. I am currently open to full-time, part-time, free-lance, or
							volunteer work. Feel free to send me a message in the Contact section.
						</p>
					</AboutColumnLeft>

					<AboutColumnRight>
						{/* <AboutColumnRight data-aos="fade-left"> */}
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
							{/* <Tooltip title="Typescript">
								<img src={image5} alt="" />
							</Tooltip>
							<Tooltip title="Angular">
								<img src={image6} alt="" />
							</Tooltip> */}
							<Tooltip title="Bootstrap">
								<img src={image7} alt="" />
							</Tooltip>
							<Tooltip title="Styled Components">
								<img src={image8} alt="" />
							</Tooltip>
							<Tooltip title="Node.js">
								<img src={image9} alt="" />
							</Tooltip>
							<Tooltip title="Express.js">
								<img src={image10} alt="" />
							</Tooltip>
							<Tooltip title="MongoDB">
								<img src={image11} alt="" />
							</Tooltip>
							<Tooltip title="WordPress">
								<img src={image12} alt="" />
							</Tooltip>
						</ImageWrap>
					</AboutColumnRight>
				</AboutContainer>
			</AboutSection>
		</>
	);
};

export default About;
