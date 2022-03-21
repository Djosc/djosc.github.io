import React from 'react';
import './LoadingScreen.scss';

const LoadingScreen = () => {
	return (
		<>
			<div className="image-wrap"></div>
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
