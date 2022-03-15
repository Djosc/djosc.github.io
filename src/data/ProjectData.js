// import ImageOne from '../images/iteration.svg';
// import ImageTwo from '../images/data-processing.svg';
import ImageOne from '../images/myFlix-homepage-scrnshot.png';
import ImageTwo from '../images/myFlix-angular-screenshot.png';
import ImageThree from '../images/meet-main-scrnshot.png';
import ImageFour from '../images/pokedex screenshot.png';
import ImageFive from '../images/movie-api-screenshot.png';
import ImageSix from '../images/chat-site-screenshot.png';

import caseStudy from '../files/myFlix Case Study.pdf';
import myFlixVideo from '../videos/myflix.mp4';
import chatFunctionality from '../files/Chat-app-functionality.pdf';

export const ProjectData = {
	heading: 'MyFlix React',
	paragraphOne:
		"MyFlix allows registered and authenticated users to view and manage a selection of classic movies. This full-stack MERN application features a React.js and Redux frontend built on top on a MongoDB, Express, and Node.js backend, styled with React Bootstrap. To try it out -- Username: 'testaccount', Password: 'test1234'",

	liveLinkLabel: 'Live Version',
	liveLink: 'https://myflix-davidcaldwell.netlify.app/',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/myFlix-client',
	caseStudyLinkLabel: 'Case Study (PDF)',
	caseStudyLink: caseStudy,
	caseStudyBool: true,
	videoLinkLabel: 'Demo Video',
	videoLink: myFlixVideo,
	videoBool: false,
	image: ImageOne,
	reverse: true,
	dark: true,
	primary: true,
};

export const ProjectDataTwo = {
	heading: 'MyFlix Angular',
	paragraphOne:
		'This is a version of the myFlix Application built with Angular. This full-stack MEAN application features a Typescript frontend built on top on a MongoDB, Express, and Node.js backend, styled with Angular Material UI.',

	liveLinkLabel: 'Live Version',
	liveLink: 'https://djosc.github.io/myFlix-Angular-client/',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/myFlix-Angular-client',
	caseStudyBool: false,
	videoBool: false,
	image: ImageTwo,
	reverse: true,
	dark: true,
	primary: true,
};

export const ProjectDataThree = {
	heading: 'Meet',
	paragraphOne:
		'Meet is a React application that retrieves mock web development events from the Google Calendar API. It uses Google Oauth2.0 in combination with serverless AWS Lambda functions to authenticate user logins. This app was built with a focus on Test Driven Development using Jest and Enzyme. It also uses the react Recharts library to visualize the event data.',

	liveLinkLabel: 'Live Version',
	liveLink: 'https://djosc.github.io/meet/',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/meet',
	caseStudyBool: false,
	videoBool: false,
	image: ImageThree,
	reverse: true,
	dark: false,
	primary: true,
};

export const ProjectDataFour = {
	heading: 'Pokedex',
	paragraphOne:
		'This is a small web application that loads the original 150 Pokémon from an external API and displays them in an interactive list. This was made with HTML, CSS, Javascript, Bootstrap, and JQuery.',

	liveLinkLabel: 'Live Version',
	liveLink: 'https://djosc.github.io/Pokedex-app/',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/Pokedex-app',
	caseStudyBool: false,
	videoBool: false,
	image: ImageFour,
	reverse: true,
	dark: false,
	primary: true,
};

export const ProjectDataFive = {
	heading: 'Movie API',
	paragraphOne:
		'This is a Node.js backend which connects to a Mongo Database through the Mongoose Library. It provides endpoints for accessing movie data with all the necessary CRUD functionality. Also, it uses Bcrypt password hashing and JWT authentication with the Passport.js library.',

	liveLinkLabel: 'Documentation',
	liveLink: 'https://david-caldwell-myflix.herokuapp.com/documentation',
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/Movie-API',
	caseStudyBool: false,
	videoBool: false,
	image: ImageFive,
	reverse: true,
	dark: true,
	primary: true,
};

export const ProjectDataSix = {
	heading: 'Chat App',
	paragraphOne:
		'This application is a simple chat app built with React-Native, Expo, Gifted-Chat, and Google Firebase. It allows users to enter their name, select their theme color, and (with user permission) send messages/images/location data in a responsive chat environment.',

	liveLinkLabel: 'Functionality (PDF)',
	liveLink: chatFunctionality,
	githubLinkLabel: 'Github Repo',
	githubLink: 'https://github.com/Djosc/native-chat-app',
	caseStudyBool: false,
	videoLinkLabel: 'Demo Video',
	videoLink: myFlixVideo,
	videoBool: false,
	image: ImageSix,
	reverse: true,
	dark: true,
	primary: true,
};
