import React, { useState } from 'react';
import { Navbar } from './components';
import {
	LoginPage,
	HomePage,
	MarketPage,
	WheelPage,
	CalendarPage,
	ResetPasswordPage,
} from './pages';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
	const [user] = useState(false);
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar isConnected={user ? true : false} />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/marketplace' element={<MarketPage />} />
					<Route path='/wheel' element={<WheelPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/calendar' element={<CalendarPage />} />
					<Route path='/reset_password' element={<ResetPasswordPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
