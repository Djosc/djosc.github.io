import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/MainSection/Main';
import { Section, Heading } from '../components/ProjectSection/ProjectSectionElements';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import About from '../components/AboutSection/About';
import Footer from '../components/Footer/Footer';

import AOS from 'aos';
import {
	ProjectData,
	ProjectDataTwo,
	ProjectDataThree,
	ProjectDataFour,
	ProjectDataFive,
	ProjectDataSix,
} from '../data/ProjectData';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Main />
			<About />
			<Heading className="">Projects I've Worked On</Heading>
			<Section id="projects" className="spacer layer2" style={{ overflowX: 'hidden' }}>
				<ProjectSection {...ProjectData} dataAOS={'fade-right'} firstSection={false} />
				<ProjectSection {...ProjectDataTwo} dataAOS={'fade-left'} firstSection={false} />
			</Section>
			<Section className="" style={{ overflowX: 'hidden' }}>
				<ProjectSection
					{...ProjectDataThree}
					dataAOS={'fade-right'}
					firstSection={false}
				/>
				<ProjectSection {...ProjectDataFour} dataAOS={'fade-left'} firstSection={false} />
			</Section>
			<Section className="spacer layer2" style={{ overflowX: 'hidden' }}>
				<ProjectSection
					{...ProjectDataFive}
					dataAOS={'fade-right'}
					firstSection={false}
				/>
				<ProjectSection {...ProjectDataSix} dataAOS={'fade-left'} firstSection={false} />
			</Section>
			<Footer />
		</>
	);
};

export default Home;
