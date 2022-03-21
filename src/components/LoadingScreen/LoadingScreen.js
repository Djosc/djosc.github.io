import React from 'react';
import './LoadingScreen.scss';

import bgImage from '../../images/blueBG.jpg';

const LoadingScreen = () => {
	return (
		<>
			<div className="image-wrap">{/* <img src={bgImage} alt="background" /> */}</div>
			<div className="box-container-wrap">
				<div className="box-container">
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
				</div>
			</div>
		</>
	);
};

export default LoadingScreen;
