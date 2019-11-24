import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BackgroundImage from '../components/Utility components/BackgroundImage';

const Home = () => (
  <div>
    <Head>
      <title>Jatin Nagar</title>
    </Head>
    <BackgroundImage bgImage='/hero-bg-1366x768.jpg'>
      <Header />
      <HeroSection />
    </BackgroundImage>
  </div>
);

export default Home;
