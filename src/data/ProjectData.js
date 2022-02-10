// import ImageOne from '../images/iteration.svg';
// import ImageTwo from '../images/data-processing.svg';
import ImageOne from '../images/myFlix-homepage-scrnshot.png';
import ImageTwo from '../images/meet-main-scrnshot.png';

import caseStudy from '../files/myFlix Case Study.pdf';

export const ProjectData = {
	heading: 'MyFlix',
	paragraphOne:
		'MyFlix allows registered and authenticated users to view and manage a selection of classic movies. This full-stack MERN application features a React.js and Redux frontend built on top on a MongoDB, Express, and Node.js backend, styled with React Bootstrap.',

	liveLinkLabel: 'Live Demo',
	liveLink: 'https://myflix-davidcaldwell.netlify.app/',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/myFlix-client',
	caseStudyLinkLabel: 'Case Study PDF',
	caseStudyLink: caseStudy,
	caseStudyBool: true,
	image: ImageOne,
	reverse: false,
	dark: true,
	primary: false,
};

export const ProjectDataTwo = {
	heading: 'Meet',
	paragraphOne:
		'Meet is a React application that retrieves data from the Google Calendar API about upcoming events related to Web Development. It uses Google Oauth2.0 in combination with serverless AWS Lambda functions to authenticate user logins. This is a Progressive Web App, built with a focus on Test Driven Development using Jest and Enzyme. It also uses the react Recharts library to visualize the event data. Read more on the github repo.',

	liveLinkLabel: 'Live Demo',
	liveLink: 'https://djosc.github.io/meet/',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/meet',
	caseStudyBool: false,
	image: ImageTwo,
	reverse: true,
	dark: false,
	primary: true,
};

// export const InfoDataThree = {
// 	heading: 'Lorem Ipsum',
// 	paragraphOne:
// 		'Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum',
// 	paragraphTwo:
// 		'Lorem ipsum Lorem Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum',
// 	buttonLabel: 'Learn More',
// 	image: ImageTwo,
// 	reverse: false,
// 	delay: 100,
// };
