// import ImageOne from '../images/iteration.svg';
// import ImageTwo from '../images/data-processing.svg';
import ImageOne from '../images/myFlix-homepage-scrnshot.png';
import ImageTwo from '../images/meet-main-scrnshot.png';
import ImageThree from '../images/pokedex screenshot.png';

import caseStudy from '../files/myFlix Case Study.pdf';
import myFlixVideo from '../videos/myflix.mp4';

export const ProjectData = {
	heading: 'MyFlix',
	paragraphOne:
		'MyFlix allows registered and authenticated users to view and manage a selection of classic movies. This full-stack MERN application features a React.js and Redux frontend built on top on a MongoDB, Express, and Node.js backend, styled with React Bootstrap.',

	liveLinkLabel: 'Live Version',
	liveLink: 'https://myflix-davidcaldwell.netlify.app/',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/myFlix-client',
	caseStudyLinkLabel: 'Case Study PDF',
	caseStudyLink: caseStudy,
	caseStudyBool: true,
	videoLinkLabel: 'Demo Video',
	videoLink: myFlixVideo,
	videoBool: true,
	image: ImageOne,
	reverse: false,
	dark: true,
	primary: false,
};

export const ProjectDataTwo = {
	heading: 'Meet',
	paragraphOne:
		'Meet is a React application that retrieves data from the Google Calendar API about upcoming events related to Web Development. It uses Google Oauth2.0 in combination with serverless AWS Lambda functions to authenticate user logins. This is a Progressive Web App, built with a focus on Test Driven Development using Jest and Enzyme. It also uses the react Recharts library to visualize the event data. Read more on the github repo.',

	liveLinkLabel: 'Live Version',
	liveLink: 'https://djosc.github.io/meet/',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/meet',
	caseStudyBool: false,
	videoBool: false,
	image: ImageTwo,
	reverse: true,
	dark: false,
	primary: true,
};

export const ProjectDataThree = {
	heading: 'Pokedex',
	paragraphOne:
		'This is a small web application that loads the original 150 Pokémon from an external API and displays them in an interactive list. This was made with HTML, CSS, Javascript, Bootstrap, and JQuery.',

	liveLinkLabel: 'Live Version',
	liveLink: 'https://djosc.github.io/Pokedex-app/',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/Pokedex-app',
	caseStudyBool: false,
	videoBool: false,
	image: ImageThree,
	reverse: false,
	dark: true,
	primary: false,
};
