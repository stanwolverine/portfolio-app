import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BackgroundImage from '../components/Utility components/BackgroundImage';

const Home = () => (
	<div>
		<BackgroundImage bgImage='/hero-bg-1366x768.jpg'>
			<Header />
			<HeroSection />
		</BackgroundImage>
	</div>
);

export default Home;
