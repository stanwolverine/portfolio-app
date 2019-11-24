import React, { useEffect, useState, memo } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BackgroundImage from '../components/Utility components/BackgroundImage';

const Home = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setPageLoaded(true);
      console.log('Page has been loaded completely.');
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Jatin Nagar</title>
      </Head>
      <BackgroundImage bgImage='/hero-bg-1366x768.jpg'>
        <Header />
        <HeroSection pageLoaded={pageLoaded} />
      </BackgroundImage>
    </div>
  );
};

export default memo(Home);
