import React, { useEffect, useState } from 'react';
import './App.css';

import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 3000);
	}, []);

	return <>{loading === false ? <Home /> : <LoadingScreen />}</>;
}

export default App;
